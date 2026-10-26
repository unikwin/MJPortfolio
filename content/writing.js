// Blog posts and talks, grouped by type. Shown on the Competitor and presenter page and on Everything.
//
// TO ADD A POST: copy an entry inside a group and fill it in.
//   url: the link to the post. Use a LinkedIn link now, or a page of your own later.
//        Leave url as "" and the title shows as plain text.
// TO ADD A GROUP: copy a whole { title, pages, entries } block.
// Groups with no entries are hidden, so delete placeholder entries you don't use.

export const writing = {
  intro: "Recaps from conferences and competitions, build logs, and slides from talks I’ve given.",
  groups: [
    {
      title: "Conference recaps",
      pages: { presenter: 1 },
      entries: [
        { year: "[Year]", title: "[Post title]", note: "[One line on what it covers]", url: "" },
      ],
    },
    {
      title: "Competition recaps",
      pages: { presenter: 2 },
      entries: [
        { year: "[Year]", title: "[Post title]", note: "[One line on what it covers]", url: "" },
      ],
    },
    {
      title: "Build logs",
      pages: { presenter: 3 },
      entries: [
        { year: "[Year]", title: "[Post title]", note: "[One line on what it covers]", url: "" },
      ],
    },
    {
      title: "Talks and presentations",
      pages: { presenter: 4 },
      entries: [
        { year: "[Year]", title: "[Presentation title]", note: "[Event or audience]", url: "" },
      ],
    },
  ],
};
