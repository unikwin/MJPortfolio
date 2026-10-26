// One function per section. Each takes the content and the page key, and returns HTML.
// A section with nothing to show returns "" and is left out of the page.

import { escape, safeUrl } from "./html.js";
import { forPage, groupsFor } from "./select.js";

const PLACEHOLDER_TILES = 6;

function item({ title, meta, blurb }) {
  return `
        <div class="item">
          <h3>${escape(title)}</h3>
          <p class="meta">${escape(meta)}</p>
          <p>${escape(blurb)}</p>
        </div>`;
}

function titleHtml({ title, url }) {
  const href = safeUrl(url);
  return href ? `<a href="${escape(href)}">${escape(title)}</a>` : escape(title);
}

function row(entry) {
  return `
          <li><span class="yr">${escape(entry.year)}</span><span class="name">${titleHtml(entry)}<span class="note">${escape(entry.note)}</span></span></li>`;
}

function rows(entries) {
  return `<ul class="rows">${entries.map(row).join("")}
        </ul>`;
}

export const sections = {
  about: (content, page) => {
    const paragraphs = content.about[page] ?? [];
    return paragraphs.map((paragraph) => `<p>${escape(paragraph)}</p>`).join("\n        ");
  },

  experience: (content, page) => {
    const entries = forPage(content.experience, page);
    return entries.length ? `<div>${entries.map(item).join("")}\n      </div>` : "";
  },

  projects: (content, page) => {
    const entries = forPage(content.projects, page);
    return entries.length ? `<div>${entries.map(item).join("")}\n      </div>` : "";
  },

  competitions: (content, page) => {
    const entries = forPage(content.competitions, page);
    return entries.length ? rows(entries) : "";
  },

  conferences: (content, page) => {
    const entries = forPage(content.conferences.entries, page);
    return entries.length ? `<div>\n        <p>${escape(content.conferences.intro)}</p>\n        ${rows(entries)}\n      </div>` : "";
  },

  writing: (content, page) => {
    const groups = groupsFor(content.writing.groups, page);
    if (!groups.length) return "";
    const html = groups
      .map((group) => `
        <div class="group">
          <h3 class="group-title">${escape(group.title)}</h3>
          ${rows(group.entries)}
        </div>`)
      .join("");
    return `<div>\n        <p>${escape(content.writing.intro)}</p>${html}\n      </div>`;
  },

  offline: (content) => {
    const { intro, games, also, twitch } = content.offline;
    const gameRows = games
      .map((game) => `
          <li class="plain"><span class="name">${escape(game.title)}<span class="note">${escape(game.note)}</span></span></li>`)
      .join("");
    const twitchUrl = safeUrl(twitch.url);
    return `<div>
        <p>${escape(intro)}</p>
        <div class="group">
          <h3 class="group-title">Favourite games</h3>
          <ul class="rows">${gameRows}
          </ul>
        </div>
        <p>Also into: ${escape(also)}</p>
        ${twitchUrl ? `<a class="twitch" href="${escape(twitchUrl)}">${escape(twitch.label)}</a>` : ""}
      </div>`;
  },

  cats: (content) => {
    const photos = content.cats;
    const tiles = photos.length
      ? photos.map((cat) => `
          <li><figure><img src="${escape(cat.src)}" alt="${escape(cat.alt || "A cat")}" loading="lazy">${cat.caption ? `<figcaption>${escape(cat.caption)}</figcaption>` : ""}</figure></li>`).join("")
      : Array.from({ length: PLACEHOLDER_TILES }, () => `
          <li><div class="tile">Cat photo goes here</div></li>`).join("");
    return `<ul class="album">${tiles}\n      </ul>`;
  },
};
