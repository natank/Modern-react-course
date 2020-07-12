import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false)
    }, [])
  })
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return pug`
      div.item(
        key=option.value
        onClick = ${() => onSelectedChange(option)}
        )
        | ${option.label}
    `
  })
  console.log(ref.current)
  return (pug`
    .ui.form(ref=${ref})
      .field
        label.label Select a Color
        .ui.selection.dropdown(className = open ? 'visible active': '' onClick=()=>{setOpen(!open)})
          i.dropdown.icon
          .text 
            ${selected.label}
          .menu(className = open ? 'visible transition' : '')
            ${renderedOptions}
    `

  )
}

export default Dropdown;