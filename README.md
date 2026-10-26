# MJ Portfolio

A personal site where each focus is its own page: Everything, Student leader, Competitor and presenter, Software and hardware geek, and Gamer, plus a hidden cat album. Each page shows only its own content.

You write each experience, project, or post **once** in `content/`, tag it with the pages it belongs on, and `node build.js` generates the pages. The result is plain HTML and CSS. No framework, no dependencies.

## Structure

```
content/            What the site says (edit these)
  site.js           Name, email, links, secret word
  about.js          About paragraphs
  experience.js     Roles and leadership
  projects.js       Projects
  competitions.js   Competition results
  conferences.js    Conferences
  writing.js        Blog posts and talks, grouped by type (template)
  offline.js        Games, hobbies, Twitch
  cats.js           Cat photo list
src/                How pages are made
  pages.js          The pages: header text and which sections each shows
  select.js         The filter (tested)
  sections.js       HTML for each section
  render.js         Page layout
  html.js           Escaping and safe links (tested)
css/                tokens (colors, fonts, per-page themes), base, layout, components
js/                 The easter egg only (secret.js is tested)
tests/              Unit tests and build tests
build.js            Generates the pages
index.html, leader.html, presenter.html, geek.html, gamer.html, cats.html   (generated)
```

## How the filter works

Every entry has a `pages` field:

```js
pages: { geek: 1, leader: 4 }
```

- It appears on the **geek** page first, and on the **leader** page fourth. Lower numbers come first.
- It does **not** appear on pages it isn't listed for.
- The **Everything** page shows every entry, in the order written in the file.
- An entry with no `pages` appears only on Everything.

## Common edits

After any edit, run `node build.js` and commit the regenerated `.html` files too.

- **Add a blog post:** open `content/writing.js`, copy an entry inside the right group, and fill it in. Set `url` to the post or LinkedIn link. Leave `url` as `""` for plain text.
- **Add a blog category:** copy a whole group block in `content/writing.js`.
- **Add a conference or competition:** copy an entry in its file.
- **Add a cat photo:** put the file in `cats/` and add a line in `content/cats.js`.
- **Move something between pages:** change its `pages` field.
- **Change a page's header text or sections:** `src/pages.js`.
- **Change colors or fonts:** `css/tokens.css`.
- **Add a page:** add it to `src/pages.js`, add an accent color in `css/tokens.css`, rebuild.

## Preview

```
node build.js
python3 -m http.server 8000
```

Open http://localhost:8000. The pages also open by double-clicking, but the cat shortcut (typing "cat") needs the local server.

## Tests

Needs Node 18 or newer.

```
node --test
```

## Put it online

Push to GitHub, then Settings > Pages > deploy from your main branch. Name the repo `unikwin.github.io` for the address `https://unikwin.github.io`. Link a recruiter straight to a focus, such as `/geek.html` or `/presenter.html`.

## Before you publish

Fill in everything in [brackets] in `content/` and `src/pages.js` (the gamer line), and add `resume.pdf` next to `index.html`.
