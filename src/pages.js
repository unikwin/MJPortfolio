// The pages of the site. Each page is a filter: it lists which sections it shows, in order.
// Content entries opt in to a page through their "pages" field (see content/*.js).
// To add a page: add an entry here, add an accent color in css/tokens.css, and run `node build.js`.

export const PAGES = [
  {
    key: "all",
    file: "index.html",
    nav: "Everything",
    title: "MJ Kang | Minjeong Kang",
    prefix: "MJ is",
    role: "Minjeong Kang.",
    lede: "Computer engineering student at the University of Manitoba. I build robots, lead student teams, compete and present, go to a lot of conferences, and play games. Pick a focus below, or keep scrolling for all of it.",
    sections: ["about", "experience", "projects", "competitions", "writing", "conferences", "offline"],
  },
  {
    key: "leader",
    file: "leader.html",
    nav: "Student leader",
    title: "MJ Kang | Student leader",
    prefix: "MJ is a",
    role: "student leader.",
    lede: "I founded a robotics team, managed $330,000 as a finance VP, and now lead the UMIEEE student branch. I like getting people coordinated and getting good ideas funded.",
    sections: ["about", "experience", "conferences", "competitions", "projects"],
  },
  {
    key: "presenter",
    file: "presenter.html",
    nav: "Competitor and presenter",
    title: "MJ Kang | Competitor and presenter",
    prefix: "MJ is a",
    role: "competitor and presenter.",
    lede: "I pitch, present, and write. I won an elevator pitch competition, placed 2nd at the Western Engineering Competition, and secured $50,000+ in sponsorships for a robotics team.",
    sections: ["about", "competitions", "writing", "conferences", "experience", "projects"],
  },
  {
    key: "geek",
    file: "geek.html",
    nav: "Software and hardware geek",
    title: "MJ Kang | Software and hardware geek",
    prefix: "MJ is a",
    role: "software and hardware geek.",
    lede: "I write C++ for farm equipment and build robots with ROS 2, ESP32s, LiDAR, and custom PCBs. Embedded systems are where I’m happiest, when the code and the hardware finally agree.",
    sections: ["about", "experience", "projects", "competitions", "conferences"],
  },
  {
    key: "gamer",
    file: "gamer.html",
    nav: "Gamer",
    title: "MJ Kang | Gamer",
    prefix: "MJ is a",
    role: "gamer.",
    lede: "When I’m not in the lab, I’m [playing / streaming]. Come say hi on Twitch.",
    sections: ["offline"],
  },
];

// The hidden page. It is not in the navigation: visitors find it by typing the secret word or clicking the paw.
export const SECRET_PAGE = {
  key: "cats",
  file: "cats.html",
  title: "MJ Kang | Cats",
  prefix: "MJ loves",
  role: "cats.",
  lede: "Yes, really. Here’s the album.",
  sections: ["cats"],
};

export const SECTION_TITLES = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  competitions: "Competitions",
  writing: "Writing and talks",
  conferences: "Conferences",
  offline: "Off the clock",
  cats: "Cats",
};
