import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Hi there' }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return pug`
        .ui.segment
            form.ui.form(onSubmit=${this.onFormSubmit.bind(this)})
                .field
                    label Image Search
                    input(type="text" value=${this.state.term} style={marginTop: '10px'} onChange=${this.onInputChange.bind(this)})
        `
    }
}

export default SearchBar;