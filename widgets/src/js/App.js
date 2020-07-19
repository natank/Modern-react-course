import React, { useState } from "react";
import Accordion from './components/Accordion'
import Search from './components/Search';
// import Translate from './components/Translate';

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

const showList = () => {
  if(window.location.pathname === '/list') {
    return pug`
      Search
    `
  }
}

const showDropdown = () => {
  if(window.location.pathname === '/dropdown') {
    return pug`
      Dropdown
    `
  }
}



export default () => {

  return (
    pug`
      ${showAccordion()}
      ${showList()}
      ${showDropdown()}
    `
  )

}