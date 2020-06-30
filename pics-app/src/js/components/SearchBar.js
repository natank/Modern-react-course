import React from 'react';


class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return pug`
        .ui.segment
            form.ui.form
                .field
                    label Image Search
                    input(type="text" style={marginTop: '10px'} onChange=${this.onInputChange})
        `
    }
}

export default SearchBar;