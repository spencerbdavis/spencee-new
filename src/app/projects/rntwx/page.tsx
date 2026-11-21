import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, CompareTable, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { LiveCams } from "@/components/live/live-demos";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "RntWx — Neighborhood Weather & Data Aggregation for Renton, WA | Spencer D'Avis",
  description:
    "Case study: rntwx.com merges 29 public data sources (NWS, CWOP, USGS, WSDOT, NOAA, city GIS) into neighborhood-level weather, live cameras, radar, an almanac and a local news wire. Next.js 16 on Vercel.",
  path: "/projects/rntwx",
  ogSlug: "rntwx",
});

const SOURCES = [
  ["Weather", "NWS gridpoints, forecasts and alerts; CWOP stations via api.weather.gov; KRNT METAR (aviationweather.gov); Open-Meteo models, ensembles and previous runs; a personal Tempest station"],
  ["Radar & sky", "NOAA MRMS map services, LibreWXR nowcast, raining.here, SSEC RealEarth satellite, NOAA SWPC space weather"],
  ["Ground truth", "NOAA National Water Prediction Service river gauges, CoCoRaHS rain gauges, RCC-ACIS and Iowa State IEM for records and normals"],
  ["Roads & cameras", "WSDOT, King County, SDOT and NPS cameras; WSDOT incidents; King County Metro service alerts"],
  ["Hazards", "USGS earthquakes, PNSN and ShakeAlert context, Puget Sound Fire"],
  ["City & news", "City of Renton ArcGIS planning areas, PrimeGov council agendas, KCLS events, and RSS from 10 local TV and newspaper outlets"],
  ["Aircraft & birds", "Overhead (my own ADS-B receiver) with adsb.lol as fallback; the Overhead garden journal"],
];

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "rntwx")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="One forecast is wrong for half the city">
        <Prose>
          <p>
            Renton runs from about <strong>20 ft on the valley floor to 530 ft on the East Plateau</strong>. On a clear winter
            night the valley pools cold air and fog while the Highlands stay above it; on a marginal snow day the plateaus stick
            while downtown stays wet. A single city forecast is reliably wrong for one of those places.
          </p>
          <p>
            The data to do better is all public, but it lives in dozens of places: NWS gridpoints, citizen weather stations,
            USGS river gauges, state and county cameras, NOAA radar, city GIS. Each has its own format, rate limits and
            habit of going down. RntWx stitches them into one fast site organised by the city&apos;s own ten planning areas.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Live demo" title="The camera wall, right now">
        <LiveCams />
        <p className="mt-4 text-sm text-ink-muted">
          This panel calls the same public API rntwx.com uses. How the vehicle counts work is its own case study:{" "}
          <Link href="/projects/traffic-cameras" className="link-signal">
            Traffic Camera Analysis
          </Link>
          .
        </p>
      </CaseSection>

      <CaseSection n="03" label="Data aggregation" title="29 source adapters, one cache policy">
        <div className="card overflow-x-auto p-0" role="region" aria-label="Data sources" tabIndex={0}>
          <table className="data-table min-w-[34rem]">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Sources</th>
              </tr>
            </thead>
            <tbody>
              {SOURCES.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row" className="font-medium whitespace-nowrap">
                    {k}
                  </th>
                  <td className="text-ink-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <Prose>
            <p>
              Every adapter in <code>lib/sources/</code> returns typed data or <strong>drops out</strong>: a failed source
              removes its section instead of breaking the page. Responses are cached for five minutes with Next.js Cache
              Components (<code>&apos;use cache&apos;</code> + <code>cacheLife</code>), so a burst of visitors costs the
              upstream APIs one request, not thousands.
            </p>
          </Prose>
        </div>
      </CaseSection>

      <CaseSection n="04" label="Architecture" title="From station error to neighborhood temperature">
        <Pipeline
          steps={[
            { title: "Model baseline", desc: "Open-Meteo temperature at each area's centre and true elevation, 10 areas from City of Renton GIS." },
            { title: "Station bias", desc: "For KRNT plus 8 CWOP stations, how far off the model is at that station right now." },
            { title: "Distance-weighted blend", desc: "Each area gets the model plus a distance-weighted average of nearby station errors." },
            { title: "Confidence", desc: "Graded by how many stations are within 5 km; shown on the page, never hidden." },
            { title: "Server render + cache", desc: "Pages render on Vercel and cache 5 min; cameras proxy through a 60 s CDN cache." },
            { title: "Machine-readable", desc: "OpenAPI spec, llms.txt and llms-full.txt so search and AI assistants can cite it." },
          ]}
        />
      </CaseSection>

      <CaseSection n="05" label="Engineering decisions">
        <Decisions
          items={[
            {
              decision: "Public-domain data first",
              why: "Open-Meteo treats any site with ads as commercial. Preferring NWS/NOAA public-domain feeds keeps options open and the site ad-free.",
            },
            {
              decision: "ArcGIS REST instead of scraping",
              why: "The city website sits behind Akamai bot protection. Its ArcGIS and PrimeGov JSON endpoints are open, stable and faster.",
            },
            {
              decision: "Label estimates as estimates",
              why: "Rain totals and soil temperatures are model estimates and the page says so. Station rain gauges are a later phase.",
            },
            {
              decision: "Free models for writing, deterministic data for facts",
              why: "LLM summaries (via OpenRouter) only rephrase data the page already has; numbers never come from a model.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="Comparison" title="RntWx vs. a typical weather app">
        <CompareTable
          caption="RntWx compared with a generic weather app"
          columns={["RntWx", "Typical weather app"]}
          rows={[
            { label: "Resolution", values: ["10 neighborhoods, valley to plateau", "One point per city or ZIP"] },
            { label: "Ground truth", values: ["Live station bias correction", "Model output only"] },
            { label: "Cameras", values: ["42, with vehicle counts", "None or a few scenic"] },
            { label: "Local context", values: ["Rivers, quakes, council agendas, local news", "Weather only"] },
            { label: "Ads / tracking", values: ["None; cookieless analytics", "Ad-supported"] },
            { label: "Open data", values: ["OpenAPI + llms.txt", "Closed"] },
          ]}
          note="Comparison against the general category, not a specific product."
        />
      </CaseSection>

      <CaseSection n="07" label="Screens">
        <div className="grid gap-6 md:grid-cols-2">
          <Shot src="/screenshots/rntwx/almanac.webp" alt="RntWx almanac page" width={1600} height={1000} caption="Almanac: records, normals and history" />
          <Shot src="/screenshots/rntwx/wire.webp" alt="RntWx news wire" width={1600} height={1000} caption="The Wire: roads, transit, City Hall and local news" />
          <Shot src="/screenshots/rntwx/map.webp" alt="RntWx map" width={1600} height={1000} caption="Map: radar, cameras and areas" />
          <Shot src="/screenshots/rntwx/home-phone.webp" alt="RntWx on a phone" width={780} height={1688} caption="Mobile home" phone />
        </div>
      </CaseSection>
    </ProjectLayout>
  );
}
