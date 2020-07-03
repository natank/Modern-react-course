import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  render() {
    return pug`
      div.search-bar.ui.segment
       form.ui.form
        div.field
          label Video Search
          input(type="text")
    `
  }
}

export default SearchBar