// Tiny HTML helpers. Everything written into a page goes through escape().

export function escape(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Only allow web, mail, and relative links, so a typo can never become a script link.
export function safeUrl(url = "") {
  return /^(https?:|mailto:|[\w./#-])/i.test(url) && !/^\s*javascript:/i.test(url) ? url : "";
}
