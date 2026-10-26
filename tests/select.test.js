import { test } from "node:test";
import assert from "node:assert/strict";
import { forPage, groupsFor, linksFor } from "../src/select.js";

const entries = [
  { id: "a", pages: { geek: 3 } },
  { id: "b" },
  { id: "c", pages: { geek: 1, leader: 2 } },
  { id: "d", pages: { geek: 3 } },
  { id: "e", pages: { leader: 1 } },
];
const ids = (list) => list.map((e) => e.id);

test("the all page shows everything in written order", () => {
  assert.deepEqual(ids(forPage(entries, "all")), ["a", "b", "c", "d", "e"]);
});

test("another page shows only entries listed for it, in rank order", () => {
  assert.deepEqual(ids(forPage(entries, "geek")), ["c", "a", "d"]);
  assert.deepEqual(ids(forPage(entries, "leader")), ["e", "c"]);
});

test("a page nothing is listed for is empty", () => {
  assert.deepEqual(forPage(entries, "gamer"), []);
});

test("entries with no pages field appear only on the all page", () => {
  assert.ok(!ids(forPage(entries, "geek")).includes("b"));
  assert.ok(ids(forPage(entries, "all")).includes("b"));
});

test("forPage does not change the original array", () => {
  const before = ids(entries);
  forPage(entries, "geek");
  assert.deepEqual(ids(entries), before);
});

test("groupsFor hides groups with no entries", () => {
  const groups = [
    { title: "A", pages: { presenter: 1 }, entries: [{ title: "x" }] },
    { title: "B", pages: { presenter: 2 }, entries: [] },
  ];
  assert.deepEqual(groupsFor(groups, "presenter").map((g) => g.title), ["A"]);
  assert.deepEqual(groupsFor(groups, "all").map((g) => g.title), ["A"]);
});

test("linksFor respects the only list", () => {
  const links = [{ label: "A" }, { label: "B", only: ["gamer"] }];
  assert.deepEqual(linksFor(links, "geek").map((l) => l.label), ["A"]);
  assert.deepEqual(linksFor(links, "gamer").map((l) => l.label), ["A", "B"]);
});
