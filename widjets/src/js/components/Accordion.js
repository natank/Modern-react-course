import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  const renderedItems = items.map((item, index) => {
    let Fragment = React.Fragment;
    const active = index === activeIndex ? 'active' : '';
    return pug`
      ${Fragment}(key=item.title)
        .title(
          onClick= ${() => onTitleClick(index)}
          className= ${active}
        )
          i.dropdown.icon
          ${item.title}
        .content(className=${active})
          p ${item.content}
    `
  })
  return pug`
    .ui.styled.accordion
      ${renderedItems}
  `
}


export default Accordion;