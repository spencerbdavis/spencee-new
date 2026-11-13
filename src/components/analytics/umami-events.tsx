"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string | number>) => void };
  }
}

const DOWNLOAD_EXT = /\.(pdf|zip|vcf|dmg|docx?|xlsx?|csv|pptx?)$/i;
const CONTACT_HOSTS: Record<string, string> = {
  "linkedin.com": "linkedin",
  "www.linkedin.com": "linkedin",
  "github.com": "github",
};

function track(event: string, data: Record<string, string>) {
  try {
    window.umami?.track(event, data);
  } catch {
    // Tracker blocked or not loaded yet: never break the click.
  }
}

/**
 * One delegated listener for every link on the site:
 * - outbound-click {host, url}   links to another host (mailto/tel use host "mailto"/"tel")
 * - download {name}              links with a download attribute or a file extension
 * - contact-click {method}       email, phone, LinkedIn, GitHub
 * - project-open {slug}          in-site links to a /projects/<slug> case study
 */
export function UmamiEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.type === "auxclick" && e.button !== 1) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;

      let url: URL;
      try {
        url = new URL(a.href, location.href);
      } catch {
        return;
      }

      if (url.protocol === "mailto:" || url.protocol === "tel:") {
        const scheme = url.protocol.slice(0, -1);
        track("outbound-click", { host: scheme, url: scheme });
        track("contact-click", { method: scheme === "mailto" ? "email" : "phone" });
        return;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") return;

      const isDownload = a.hasAttribute("download") || DOWNLOAD_EXT.test(url.pathname);
      if (isDownload) {
        track("download", { name: decodeURIComponent(url.pathname.split("/").pop() || url.pathname) });
      }

      if (url.host !== location.host) {
        track("outbound-click", { host: url.host, url: `${url.origin}${url.pathname}` });
        const method = CONTACT_HOSTS[url.host];
        if (method) track("contact-click", { method });
        return;
      }

      const project = url.pathname.match(/^\/projects\/([a-z0-9-]+)\/?$/);
      if (project) track("project-open", { slug: project[1] });
    }

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("auxclick", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("auxclick", onClick, { capture: true });
    };
  }, []);

  return null;
}
