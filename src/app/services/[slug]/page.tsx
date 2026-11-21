import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { SERVICE_PAGES } from "@/lib/services";
import { ServiceTemplate } from "@/components/services/service-template";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_PAGES.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.description, path: `/services/${s.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICE_PAGES.find((x) => x.slug === slug);
  if (!s) notFound();
  return <ServiceTemplate s={s} />;
}
