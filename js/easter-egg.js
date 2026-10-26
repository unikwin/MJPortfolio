// The only JavaScript the site ships: typing the secret word opens the secret page.
// The word and page come from data attributes on <body>, which build.js writes.

import { createSecretMatcher } from "./secret.js";

const { secretWord, secretHref } = document.body.dataset;

if (secretWord && secretHref) {
  const typed = createSecretMatcher(secretWord);
  document.addEventListener("keydown", (event) => {
    if (typed(event)) location.assign(secretHref);
  });
}
