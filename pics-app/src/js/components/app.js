import React from 'react'
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor() {
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    onSearchSubmit = function(term) {
        console.log(`form submitted ${term}`)
    }
    render() {
        return pug`
        div.ui.container
        SearchBar(onSubmit= ${this.onSearchSubmit})
        `
    }
}

export default App;