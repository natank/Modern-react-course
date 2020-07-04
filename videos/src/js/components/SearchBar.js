import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // TODO: Make sure we call callback from parent component
  }

  render() {
    return pug`
      div.search-bar.ui.segment
       form.ui.form(onSubmit=this.onFormSubmit)
        div.field
          label Video Search
          input(type="text" 
            onChange= this.onInputChange
            value = this.state.term)
    `
  }
}

export default SearchBar