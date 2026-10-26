// Pure helpers for the "type a secret word" easter egg. No DOM access.

// True for a single printable key with no Ctrl/Cmd/Alt held down.
export function isPlainKey(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
}

// Returns a function you call with each keydown event. It returns true once, when the word is typed.
export function createSecretMatcher(word) {
  const target = word.toLowerCase();
  let buffer = "";
  return function matches(event) {
    if (!isPlainKey(event)) return false;
    buffer = (buffer + event.key.toLowerCase()).slice(-target.length);
    if (buffer !== target) return false;
    buffer = "";
    return true;
  };
}
