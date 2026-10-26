import { test, before } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildSite } from "../build.js";

let dir;
const page = (name) => readFile(join(dir, name), "utf8");

before(async () => {
  dir = await mkdtemp(join(tmpdir(), "mj-"));
  await buildSite(dir);
});

test("every page is built", async () => {
  const files = await buildSite(dir);
  assert.deepEqual(files.sort(), ["cats.html", "geek.html", "gamer.html", "index.html", "leader.html", "presenter.html"].sort());
});

test("the everything page contains every side", async () => {
  const html = await page("index.html");
  for (const text of ["MacDon", "Vice President Finance", "Elevator Pitch", "Conference recaps", "Favourite games"]) {
    assert.ok(html.includes(text), `index.html is missing: ${text}`);
  }
});

test("the geek page is a real filter: engineering in, other sides out", async () => {
  const html = await page("geek.html");
  assert.ok(html.includes("MacDon") && html.includes("Assistive Curling Device"));
  for (const text of ["Vice President Finance", "Resident Advisor", "Conference recaps", "Favourite games"]) {
    assert.ok(!html.includes(text), `geek.html should not contain: ${text}`);
  }
});

test("the leader page excludes engineering internships and games", async () => {
  const html = await page("leader.html");
  assert.ok(html.includes("Vice President Finance") && html.includes("Resident Advisor"));
  assert.ok(!html.includes("MacDon") && !html.includes("Favourite games"));
});

test("the presenter page has the grouped blog template", async () => {
  const html = await page("presenter.html");
  for (const title of ["Conference recaps", "Competition recaps", "Build logs", "Talks and presentations"]) {
    assert.ok(html.includes(title), `presenter.html is missing group: ${title}`);
  }
  assert.ok(!html.includes("Assistive Curling Device"));
});

test("the gamer page has games and Twitch only", async () => {
  const html = await page("gamer.html");
  assert.ok(html.includes("Favourite games") && html.includes("twitch.tv/unikwinpink"));
  assert.ok(!html.includes("MacDon") && !html.includes("Vice President"));
});

test("nav marks the current page and the secret page is not in it", async () => {
  const html = await page("leader.html");
  assert.match(html, /href="leader.html" aria-current="page"/);
  assert.ok(!html.includes('<li><a href="cats.html"'));
});

test("the secret word is wired on normal pages but not on the cats page", async () => {
  assert.match(await page("index.html"), /data-secret-word="cat" data-secret-href="cats.html"/);
  assert.ok(!(await page("cats.html")).includes("data-secret-word"));
});

test("no page shows unfilled brackets for confirmed facts", async () => {
  for (const name of ["index.html", "geek.html", "leader.html"]) {
    const html = await page(name);
    assert.ok(!html.includes("[Present]") && !html.includes("[Dates]"), `${name} has an unfilled date`);
  }
});

test("each page shows its own About text", async () => {
  const { about } = await import("../content/about.js");
  for (const [key, file] of [["all", "index.html"], ["leader", "leader.html"], ["presenter", "presenter.html"], ["geek", "geek.html"]]) {
    const html = await page(file);
    const intro = about[key][0].slice(0, 40);
    assert.ok(html.includes(intro), `${file} is missing its About text`);
    for (const [other, paragraphs] of Object.entries(about)) {
      if (other !== key) assert.ok(!html.includes(paragraphs[0].slice(0, 40)), `${file} shows the ${other} About text`);
    }
  }
  assert.ok(!(await page("gamer.html")).includes('id="about"'));
});
