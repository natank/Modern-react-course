import React, { useState } from 'react'

function SearchBar(props) {
  const [term, setTerm] = useState('');

  function onInputChange(event) {
    setTerm(event.target.value)
  }

  function onFormSubmit(event) {
    event.preventDefault();
    props.onFormSubmit(term);
    // TODO: Make sure we call callback from parent component
  }

  return pug`
      div.search-bar.ui.segment
       form.ui.form(onSubmit=onFormSubmit)
        div.field
          label Video Search
          input(type="text" 
            onChange= onInputChange
            value = term)
    `
}

export default SearchBar