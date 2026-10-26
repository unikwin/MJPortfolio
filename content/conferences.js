// Conferences, newest first. Copy an entry for each one; delete placeholders you are not using.
//
// "pages" lists where each one shows and in what order (1 = first). The geek page lists only the
// technical ones (CUSEC, IEEE); the leader and presenter pages show all of them.
// Items in [brackets] still need you: a city, or what you did (attended, delegate, competed, presented).

export const conferences = {
  intro: "I go to a lot of them, because the best way to learn what the field needs is to talk to the people in it.",
  entries: [
    { year: "2026", title: "EELA 2026", note: "[Full name] | [City | what you did]", pages: { leader: 1, presenter: 3 } },
    { year: "2026", title: "Canadian Engineering Competition (CEC)", note: "Canadian Federation of Engineering Students (CFES) | [City | what you did]", pages: { leader: 2, presenter: 2 } },
    { year: "2026", title: "Western Engineering Competition (WEC)", note: "WESST | Edmonton | 2nd place, Re-Engineering", pages: { leader: 3, presenter: 1 } },
    { year: "2025", title: "LEADS 2025", note: "[Full name] | [City | what you did]", pages: { leader: 4, presenter: 4 } },
    { year: "2025", title: "EELA 2025", note: "[Full name] | [City | what you did]", pages: { leader: 5, presenter: 5 } },
    { year: "2025", title: "CUSEC 2025", note: "Canadian University Software Engineering Conference | Montréal | [what you did]", pages: { geek: 1, leader: 6, presenter: 6 } },
    { year: "2024", title: "WESST Annual General Meeting and Retreat (AGMR)", note: "WESST | [City | what you did]", pages: { leader: 7, presenter: 7 } },
    { year: "2024", title: "Conference on Sustainability in Engineering (CSE)", note: "Canadian Federation of Engineering Students (CFES) | [City | what you did]", pages: { leader: 8, presenter: 8 } },
    { year: "[Year]", title: "IEEE Canada Students and Young Professionals Congress", note: "IEEE Canada | [City | what you did]", pages: { geek: 2, leader: 9, presenter: 9 } },
  ],
};