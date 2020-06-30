import React from 'react';


class SearchBar extends React.Component {
    render() {
        return pug`
        .ui.segment
            form.ui.form
                .field
                label Image Search
                input(type="text")
        `
    }
}

export default SearchBar;