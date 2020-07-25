import React from 'react';
import Link from './Link'
const Header = () => {
  return (
    pug`
    div.ui.secondary.pointing.menu
      Link(href = "/").item
        | Accordion

      Link(href = "/list").item
        | Search

      Link(href = "/dropdown").item
        | Dropdown

      Link(href = "/translate").item
        | Translate
    `
  );
}

export default Header;