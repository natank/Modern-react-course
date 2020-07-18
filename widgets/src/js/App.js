import React, { useState } from "react";
import Accordion from './components/Accordion'
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: 'hello',
    content: 'nice day'
  },
  {
    title: 'goodby',
    content: 'see you soon'
  }
]
const showAccordion = () => {
  if (window.location.pathname === '/') {
    return pug`
      Accordion(items= ${items})
    `
  }
}

export default () => {

  return (
    pug`
      ${showAccordion()}
    `
  )

}