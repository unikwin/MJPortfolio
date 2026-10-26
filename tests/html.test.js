import { test } from "node:test";
import assert from "node:assert/strict";
import { escape, safeUrl } from "../src/html.js";

test("escape neutralizes markup", () => {
  assert.equal(escape('<b a="1">&</b>'), "&lt;b a=&quot;1&quot;&gt;&amp;&lt;/b&gt;");
});

test("safeUrl allows web, mail, and relative links", () => {
  assert.equal(safeUrl("https://example.com"), "https://example.com");
  assert.equal(safeUrl("mailto:a@b.c"), "mailto:a@b.c");
  assert.equal(safeUrl("posts/one.html"), "posts/one.html");
});

test("safeUrl rejects script links and empty values", () => {
  assert.equal(safeUrl("javascript:alert(1)"), "");
  assert.equal(safeUrl(""), "");
});
