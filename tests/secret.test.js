import { test } from "node:test";
import assert from "node:assert/strict";
import { isPlainKey, createSecretMatcher } from "../js/secret.js";

const key = (k, mods = {}) => ({ key: k, ctrlKey: false, metaKey: false, altKey: false, ...mods });

test("isPlainKey accepts letters and rejects modified or named keys", () => {
  assert.equal(isPlainKey(key("c")), true);
  assert.equal(isPlainKey(key("c", { ctrlKey: true })), false);
  assert.equal(isPlainKey(key("Shift")), false);
  assert.equal(isPlainKey(key("Enter")), false);
});

test("the matcher fires once when the word is typed", () => {
  const matches = createSecretMatcher("cat");
  assert.equal(matches(key("c")), false);
  assert.equal(matches(key("a")), false);
  assert.equal(matches(key("t")), true);
  assert.equal(matches(key("t")), false);
});

test("the matcher ignores case and works mid-stream", () => {
  const matches = createSecretMatcher("cat");
  const results = ["x", "C", "A", "T"].map((k) => matches(key(k)));
  assert.deepEqual(results, [false, false, false, true]);
});

test("modifier keys do not reset or advance the buffer", () => {
  const matches = createSecretMatcher("cat");
  matches(key("c"));
  matches(key("Shift"));
  matches(key("a"));
  assert.equal(matches(key("t")), true);
});

test("the matcher can fire again later", () => {
  const matches = createSecretMatcher("cat");
  "cat".split("").forEach((k) => matches(key(k)));
  const again = "cat".split("").map((k) => matches(key(k)));
  assert.deepEqual(again, [false, false, true]);
});
