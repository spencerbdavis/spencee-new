import type { Project } from "./projects";

/**
 * Independent products and home-lab hardware. Everything here is live and
 * built, run and paid for by Spencer. Facts come from each repo's README and
 * handoff docs (Nov 2026); live numbers on the pages are fetched client-side.
 *
 * `repo` is set only for repositories that are public today. Others are listed
 * in PLANNED_PUBLIC_REPOS and get a link once they've been scrubbed and opened.
 */
export const INDEPENDENT_PROJECTS: Project[] = [
  {
    slug: "door-decal",
    group: "work",
    title: "East Howe Steps Front-Door Decal",
    subtitle:
      "A one-colour cut-vinyl decal for a building's front door, designed like software: nine versions, a six-font study, and a build script that fails the proof if any text drops below its minimum cap height or the QR code stops scanning.",
    category: "Creative",
    outcome: "Nine versions to a quiet, legible door that survives a crooked install.",
    problem:
      "A front door has to do four jobs at once: brand the building, sell a tour, state the door policy, and give a 24-hour emergency number someone can read from the sidewalk. It's white vinyl on glass with a lobby behind it, installed by hand, so every design choice has to survive reflections, distance and a decal that goes on a degree off level.",
    techStack: ["Typography", "Cut Vinyl", "HTML/CSS Layout", "Python", "Headless Chrome", "QR Verification"],
    stats: [
      { value: "9", label: "Versions" },
      { value: "6", label: "Typefaces Tested" },
      { value: "0.60 in", label: "Minimum Cap Height" },
      { value: "1.40 in", label: "Phone Number Caps" },
    ],
    links: [{ label: "easthowesteps.com", url: "https://www.easthowesteps.com" }],
    cover: "/photos/decal/installed.webp",
    screenshotDir: "decal",
    featured: true,
    badge: "Installed",
    year: "2026",
  },
  {
    slug: "lobby-displays",
    group: "work",
    title: "Lobby TV Displays — East Howe Steps & VIVA",
    subtitle:
      "Editorial poster sequences for apartment lobby televisions: live weather, real-time bus arrivals, Seattle sports scores, seasonal decoration and resident notices, each designed to its building's brand and running unattended on a kiosk browser.",
    category: "Web",
    outcome: "Two buildings' lobbies turned into live, on-brand signage with zero monthly fees.",
    problem:
      "Lobby TVs in apartment buildings usually loop a stale slideshow or a paid digital-signage service. Residents walk past them a dozen times a day, so the screen is valuable real estate: it should answer what's useful right now (weather, the next bus, the game score, who to call at 2 a.m.) and look like it belongs to the building.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Motion", "View Transitions", "OneBusAway", "Vercel"],
    stats: [
      { value: "16 + 12", label: "Posters (EHS + VIVA)" },
      { value: "7", label: "Seattle Teams Tracked" },
      { value: "5", label: "Seasonal Themes" },
      { value: "$0", label: "Signage Subscription" },
    ],
    links: [],
    cover: "/photos/lobby/ehs/01-welcome.webp",
    screenshotDir: "lobby",
    featured: true,
    badge: "In the lobby",
    year: "2026",
  },
  {
    slug: "rntwx",
    group: "independent",
    title: "RntWx — Renton Neighborhood Weather",
    subtitle:
      "A city-scale weather and civic data site for Renton, WA: neighborhood temperatures blended from stations and models, 42 live cameras, radar, rivers, quakes, an almanac and a local news wire, all from 29 public data sources.",
    category: "Data Systems",
    outcome: "29 public data sources merged into one fast, neighborhood-level site.",
    problem:
      "Renton runs from 20 ft on the valley floor to 530 ft on the plateaus, so a single city forecast is wrong for half of it on any frosty or snowy night. The data to do better is public, but it is spread across NWS, CWOP, USGS, WSDOT, King County, NOAA and city GIS, each with its own format, rate limits and outages.",
    techStack: ["Next.js 16", "TypeScript", "Vercel", "Cache Components", "MapLibre", "Vercel Blob", "OpenRouter", "OpenAPI"],
    stats: [
      { value: "29", label: "Source Adapters" },
      { value: "42", label: "Live Cameras" },
      { value: "10", label: "Neighborhood Areas" },
      { value: "5 min", label: "Cache Window" },
    ],
    links: [{ label: "rntwx.com", url: "https://www.rntwx.com" }],
    live: "https://www.rntwx.com",
    cover: "/screenshots/rntwx/home.webp",
    screenshotDir: "rntwx",
    featured: true,
    badge: "Live",
    year: "2026",
  },
  {
    slug: "traffic-cameras",
    group: "independent",
    title: "Traffic Camera Analysis",
    subtitle:
      "Computer vision over 42 public traffic cameras: every new frame is cached, vehicles are counted with YOLOX on an Intel iGPU, and each camera is compared against its own history to flag jams, closures and dead feeds.",
    category: "Applied AI",
    outcome: "Jam and closure detection on 42 cameras for under $0.25 a day in model calls.",
    problem:
      "WSDOT and King County publish hundreds of camera stills, but a picture is not an alert. Turning low-resolution 335×244 JPEGs into “is this road stopped right now?” means caching frames reliably, counting vehicles cheaply, and judging each camera against what is normal for that camera at that hour.",
    techStack: ["Python", "YOLOX", "OpenVINO", "ONNX Runtime", "FastAPI", "SQLite", "Docker", "Cloudflare Tunnel"],
    stats: [
      { value: "42", label: "Cameras Polled / 30 s" },
      { value: "~250 ms", label: "Per Frame on iGPU" },
      { value: "9%", label: "iGPU Share Used" },
      { value: "$0.25", label: "Daily LLM Cap" },
    ],
    links: [{ label: "Live on rntwx.com", url: "https://www.rntwx.com/cameras" }],
    live: "https://www.rntwx.com/cameras",
    cover: "/screenshots/rntwx/cameras.webp",
    screenshotDir: "rntwx",
    featured: true,
    badge: "Live",
    year: "2026",
  },
  {
    slug: "raining-here",
    group: "independent",
    title: "raining.here — Next-Hour Rain",
    subtitle:
      "Street-level rain for the Seattle–Tacoma area, now and minute by minute for the next hour, built from NOAA radar and a motion nowcast, scored against the radar every hour, like the original Dark Sky.",
    category: "Data Systems",
    outcome: "Hyperlocal rain answers for 90+ places, scored against the radar every hour.",
    problem:
      "Apple bought Dark Sky and the minute-by-minute rain answer for Seattle went with it. Radar data is free from NOAA, but turning it into “will it rain on me in the next 20 minutes?” takes quality control, corrections for where rain actually lands, a motion nowcast, and honest scoring of how often it is wrong.",
    techStack: ["Python", "NumPy", "SciPy", "NEXRAD Level II", "NOAA MRMS", "Docker", "Cloudflare", "OpenAPI"],
    stats: [
      { value: "90+", label: "Place Pages" },
      { value: "500 m", label: "Rain Radius" },
      { value: "2 min", label: "Radar Refresh" },
      { value: "4,002", label: "Forecasts Scored (Nov)" },
    ],
    links: [{ label: "raining.here", url: "https://raining.here" }],
    live: "https://raining.here",
    cover: "/screenshots/raining/home.webp",
    screenshotDir: "raining",
    featured: true,
    badge: "Live",
    year: "2026",
  },
  {
    slug: "overhead",
    group: "independent",
    title: "Overhead — Live Flight Tracker",
    subtitle:
      "A self-hosted ADS-B flight tracker: a $30 software-defined radio on a windowsill hears aircraft over Renton, and an installable web app turns that into a live map with dead-reckoned motion, to-scale silhouettes and faux-3D airports.",
    category: "Data Systems",
    outcome: "A public, installable flight tracker fed by my own antenna.",
    problem:
      "Commercial trackers are built for the whole world. I wanted the planes over my neighborhood, including 737 MAX first flights from Renton's Boeing plant next door, with smooth motion, honest route data and no ads, served from a home server without revealing where the antenna is.",
    techStack: ["RTL-SDR", "readsb", "Python", "SQLite", "Leaflet", "Service Worker", "Docker", "nginx"],
    stats: [
      { value: "1090 MHz", label: "Own Receiver" },
      { value: "120 nm", label: "Route Trust Slack" },
      { value: "PWA", label: "Installable App" },
      { value: "GPL-3.0", label: "Open Source" },
    ],
    links: [
      { label: "overhead.here", url: "https://overhead.here" },
      { label: "Source on GitHub", url: "https://github.com/spencerbdavis/sky-over-renton", icon: "github" },
    ],
    live: "https://overhead.here",
    repo: "https://github.com/spencerbdavis/sky-over-renton",
    cover: "/screenshots/overhead/map.webp",
    screenshotDir: "overhead",
    featured: true,
    badge: "Live · Open Source",
    year: "2026",
  },
  {
    slug: "overhead-journal",
    group: "independent",
    title: "Overhead Journal — Birds & Planes",
    subtitle:
      "An illustrated journal of everything that passes above a Renton garden: a Raspberry Pi microphone identifies birds with BirdNET, an ADS-B receiver logs aircraft, and each new species or airframe is drawn once in a 1960s pen-and-ink style.",
    category: "Applied AI",
    outcome: "Continuous bird and aircraft identification from a Raspberry Pi Zero in the garden.",
    problem:
      "Bird-ID apps answer one recording at a time. Running all day means a low-power capture device, signed uploads, classifiers that do not mistake a jet for a crow, and a way to show months of detections that is pleasant rather than a spreadsheet.",
    techStack: ["Raspberry Pi Zero", "BirdNET v2.4", "YAMNet", "FastAPI", "Preact", "Vite", "SQLite", "Gemini Image"],
    stats: [
      { value: "2", label: "Audio Models" },
      { value: "51", label: "Server Tests" },
      { value: "ARMv6", label: "Pi Zero Capture" },
      { value: "≥ 0.90", label: "Listing Confidence" },
    ],
    links: [{ label: "overhead.spenc.ee", url: "https://overhead.spenc.ee" }],
    live: "https://overhead.spenc.ee",
    cover: "/screenshots/overhead-journal/collage.webp",
    screenshotDir: "overhead-journal",
    featured: true,
    badge: "Live",
    year: "2026",
  },
  {
    slug: "portal-screen",
    group: "lab",
    title: "Meta Portal → Desk Panel",
    subtitle:
      "A discontinued first-generation Meta Portal turned into a desk control panel: my own kiosk APK as the home screen, a native Spotify Connect receiver in Rust, live aircraft, home controls and news, with no root and no exploits.",
    category: "Hardware",
    outcome: "Freed about 2 CPU cores and 300 MB of RAM on a device Meta stopped supporting.",
    problem:
      "Meta discontinued Portal, leaving a capable Snapdragon 835 screen with four microphones and Widevine L1 that would never get new software. The bootloader is locked, so a custom ROM is not an option. Everything had to be done at the application level, without breaking the login that keeps ADB working.",
    techStack: ["Android", "Java", "WebView", "Rust", "librespot", "Chrome DevTools Protocol", "Media3", "Tailscale"],
    stats: [
      { value: "2.74 → 0.77", label: "Busy CPU Cores" },
      { value: "−300 MB", label: "Memory Reclaimed" },
      { value: "−173", label: "Threads Removed" },
      { value: "0", label: "Root / Exploits" },
    ],
    links: [],
    cover: "/screenshots/portal-screen/launcher.webp",
    screenshotDir: "portal-screen",
    featured: true,
    badge: "Hardware",
    year: "2026",
  },
  {
    slug: "wall-display",
    group: "lab",
    title: "Photo Frame → Wall Dashboard",
    subtitle:
      "A cheap Android photo frame (Allwinner A33, Android 6, Chrome 44 WebView) rebuilt as an always-on wall display: weather, an aircraft radar scope, air quality, garden watering and a daily forecast with jokes, driven by a Python server.",
    category: "Hardware",
    outcome: "A glanceable home display on hardware a decade behind current browsers.",
    problem:
      "Cheap photo frames have good screens and terrible software. This one runs Android 6 with a WebView from 2015, has no app store worth using, and needs to run unattended for months: no crashes, no burn-in, sensible brightness at night.",
    techStack: ["Android", "Java", "Python", "WebView", "Home Assistant", "Tempest API", "ADS-B", "OpenRouter"],
    stats: [
      { value: "API 23", label: "Android 6 Target" },
      { value: "45 s", label: "Watchdog Window" },
      { value: "1280×800", label: "Display" },
      { value: "No Gradle", label: "Hand-Rolled APK Build" },
    ],
    links: [],
    cover: "/photos/wall/frame-mounted.webp",
    screenshotDir: "wall-display",
    featured: true,
    badge: "Hardware",
    year: "2026",
  },
];

/** Repos Spencer plans to open once secrets and home-network details are scrubbed. */
export const PLANNED_PUBLIC_REPOS = ["raining", "rntwx-cams", "birds-planes", "portal-screen", "wall-frame"] as const;
