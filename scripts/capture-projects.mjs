// Capture above-the-fold screenshots of live projects for the portfolio cards.
// Run: npx playwright install chromium && node scripts/capture-projects.mjs [filter]
// Writes public/screenshots/<dir>/<name>.webp (1600px wide, webp q80).
import { chromium } from "playwright";
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../public/screenshots");

const DESKTOP = { width: 1440, height: 900 };
const PHONE = { width: 390, height: 844 };

const SHOTS = [
  // Weather family
  { dir: "rntwx", name: "home", url: "https://www.rntwx.com/", wait: 4000 },
  { dir: "rntwx", name: "cameras", url: "https://www.rntwx.com/cameras", wait: 5000 },
  { dir: "rntwx", name: "almanac", url: "https://www.rntwx.com/almanac", wait: 3000 },
  { dir: "rntwx", name: "wire", url: "https://www.rntwx.com/wire", wait: 3000 },
  { dir: "rntwx", name: "map", url: "https://www.rntwx.com/map", wait: 6000 },
  { dir: "rntwx", name: "home-phone", url: "https://www.rntwx.com/", wait: 4000, viewport: PHONE },
  { dir: "raining", name: "home", url: "https://raining.here/", wait: 4000 },
  { dir: "raining", name: "place", url: "https://raining.here/seattle", wait: 3000 },
  { dir: "raining", name: "how", url: "https://raining.here/how", wait: 1500 },
  { dir: "raining", name: "home-phone", url: "https://raining.here/", wait: 4000, viewport: PHONE },
  // Overhead
  { dir: "overhead", name: "map", url: "https://overhead.here/", wait: 8000 },
  { dir: "overhead", name: "boeing", url: "https://overhead.here/boeing", wait: 4000 },
  { dir: "overhead", name: "map-phone", url: "https://overhead.here/", wait: 8000, viewport: PHONE },
  { dir: "overhead-journal", name: "collage", url: "https://overhead.spenc.ee/", wait: 8000 },
  { dir: "overhead-journal", name: "collage-phone", url: "https://overhead.spenc.ee/", wait: 8000, viewport: PHONE },
  // Property microsites (live only)
  { dir: "property-sites", name: "cortina", url: "https://www.cortinaeastlake.com/", wait: 3000 },
  { dir: "property-sites", name: "east-howe-steps", url: "https://www.easthowesteps.com/", wait: 3000 },
  { dir: "property-sites", name: "ellie", url: "https://www.lifeatellie.com/", wait: 3000 },
  { dir: "property-sites", name: "viva", url: "https://www.vivacaphill.com/", wait: 3000 },
  { dir: "property-sites", name: "odessa", url: "https://www.odessaonlakeunion.com/", wait: 3000 },
  { dir: "property-sites", name: "hawthorne", url: "https://www.hawthornecapitolhill.com/", wait: 3000 },
  { dir: "property-sites", name: "east-highland-studio", url: "https://commercial.easthighlandapts.com/", wait: 3000 },
  { dir: "property-sites", name: "the-clarke", url: "https://www.theclarkegreenlake.com/", wait: 3000 },
];

const filter = process.argv[2];

async function run() {
  const browser = await chromium.launch();
  for (const shot of SHOTS) {
    if (filter && !`${shot.dir}/${shot.name}`.includes(filter)) continue;
    const viewport = shot.viewport ?? DESKTOP;
    const ctx = await browser.newContext({
      viewport,
      deviceScaleFactor: viewport === PHONE ? 2 : 1.25,
      colorScheme: "light",
      userAgent:
        viewport === PHONE
          ? "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1"
          : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    });
    const page = await ctx.newPage();
    const out = path.join(ROOT, shot.dir, `${shot.name}.webp`);
    try {
      await page.goto(shot.url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForTimeout(shot.wait ?? 2500);
      await page.keyboard.press("Escape");
      const png = await page.screenshot({ fullPage: false });
      await fs.mkdir(path.dirname(out), { recursive: true });
      await sharp(png)
        .resize({ width: viewport === PHONE ? 780 : 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
      console.log(`ok   ${shot.dir}/${shot.name}`);
    } catch (err) {
      console.log(`FAIL ${shot.dir}/${shot.name}: ${err.message.split("\n")[0]}`);
    }
    await ctx.close();
  }
  await browser.close();
}

run();
