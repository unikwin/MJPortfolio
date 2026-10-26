// Pure filtering and ordering. No file or page access, so it is easy to test.
//
// The "all" page shows everything in the order written. Every other page is a real filter:
// an entry appears only if its "pages" field lists that page, ordered by that number (1 = first).

export const ALL = "all";

function ranked(entry, page) {
  return Boolean(entry.pages) && entry.pages[page] !== undefined;
}

export function forPage(entries, page) {
  if (page === ALL) return [...entries];
  return entries
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => ranked(entry, page))
    .sort((a, b) => a.entry.pages[page] - b.entry.pages[page] || a.index - b.index)
    .map(({ entry }) => entry);
}

// Blog groups: same filter, and a group with no entries is hidden.
export function groupsFor(groups, page) {
  return forPage(groups, page).filter((group) => group.entries.length > 0);
}

// Contact links: a link with an "only" list shows on those pages; without one it shows everywhere.
export function linksFor(links, page) {
  return links.filter((link) => !link.only || link.only.includes(page));
}
