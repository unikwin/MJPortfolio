// Site-wide facts. Edit here.

export const site = {
  name: "Minjeong (MJ) Kang",
  email: "minjeongkang3@gmail.com",
  location: "Winnipeg, Manitoba",
  // "only" limits a link to certain pages. No "only" means it shows on every page.
  links: [
    { label: "Resume", url: "resume.pdf" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/minjeong-kang-96ab431b2/" },
    { label: "GitHub", url: "https://github.com/unikwin" },
    { label: "Twitch", url: "https://www.twitch.tv/unikwinpink", only: ["all", "gamer"] },
    { label: "Email", url: "mailto:minjeongkang3@gmail.com" },
  ],
  secret: { word: "cat", page: "cats.html" },
};
