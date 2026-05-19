// Capture full-page screenshots of WordPress sites using Playwright.
// Run: npx playwright install chromium && node scripts/capture-wp-sites.mjs
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/screenshots/wordpress-sites");

const SITES = [
  { slug: "harbor-flats", url: "https://harborflatsseattle.com/" },
  { slug: "vibe-fremont", url: "https://vibefremont.com/" },
  { slug: "bonavista-pm", url: "https://bonavistapm.com/" },
  { slug: "arbor-village", url: "https://arborvillageapts.com/" },
  { slug: "wallingford-studios", url: "https://wallingfordstudios.com/" },
  { slug: "ludwig-seattle", url: "https://ludwigseattle.com/" },
  { slug: "4400-alaska", url: "https://4400alaska.com/" },
  { slug: "ballinger-living", url: "https://ballingerliving.com/" },
  { slug: "cedar-lane-pacific", url: "https://cedarlanepacific.com/" },
  { slug: "chelsea-by-the-bay", url: "https://chelseabythebay.com/" },
  { slug: "chianti", url: "https://chiantiapartments.com/" },
  { slug: "courtyard-ballard", url: "https://courtyardballard.com/" },
  { slug: "cubix", url: "https://cubixapartments.com/" },
  { slug: "east-highland", url: "https://easthighlandapts.com/" },
];

const VIEWPORT = { width: 1440, height: 900 };
const MAX_HEIGHT = 6000;

async function capture() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  for (const site of SITES) {
    console.log(`→ ${site.slug}  ${site.url}`);
    const page = await ctx.newPage();
    try {
      await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });

      // Dismiss popups: press ESC a couple times, then try common close buttons.
      await page.waitForTimeout(1200);
      await page.keyboard.press("Escape");
      await page.waitForTimeout(200);
      await page.keyboard.press("Escape");

      // Best-effort: click common modal close affordances.
      const closers = [
        '[aria-label*="close" i]',
        '[aria-label*="dismiss" i]',
        'button.close',
        '.modal .close',
        '.popup-close',
        '.elementor-popup-modal .dialog-close-button',
        '.eael-modal-close',
        '[data-dismiss="modal"]',
      ];
      for (const sel of closers) {
        const handles = await page.$$(sel);
        for (const h of handles) {
          try {
            if (await h.isVisible()) await h.click({ timeout: 500 });
          } catch {}
        }
      }
      await page.waitForTimeout(400);

      // Trigger lazy-loaded content by scrolling
      await page.evaluate(async (maxH) => {
        await new Promise((resolve) => {
          let y = 0;
          const step = 400;
          const t = setInterval(() => {
            window.scrollBy(0, step);
            y += step;
            if (y >= Math.min(document.body.scrollHeight, maxH)) {
              clearInterval(t);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 120);
        });
      }, MAX_HEIGHT);
      await page.waitForTimeout(800);

      // One more ESC + close pass in case scrolling triggered a delayed popup.
      await page.keyboard.press("Escape");
      await page.waitForTimeout(200);
      for (const sel of closers) {
        const handles = await page.$$(sel);
        for (const h of handles) {
          try {
            if (await h.isVisible()) await h.click({ timeout: 500 });
          } catch {}
        }
      }
      await page.waitForTimeout(300);

      const out = path.join(OUT_DIR, `${site.slug}.png`);
      await page.screenshot({ path: out, fullPage: true, type: "png" });
      console.log(`   ✓ ${out}`);
    } catch (err) {
      console.error(`   ✗ ${site.slug}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

capture();
