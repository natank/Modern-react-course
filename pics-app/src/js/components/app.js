import React from 'react'
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
    constructor() {
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.state = { images: [] }
    }
    async onSearchSubmit(term) {
        try {

            let response = await unsplash.get('/search/photos', {
                params: {
                    query: term
                }
            })
            this.setState({ images: response.data.results });
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return pug`
        div.ui.container
            SearchBar(onSubmit= ${this.onSearchSubmit})
            ImageList( images = ${this.state.images})
        `
    }
}

export default App;