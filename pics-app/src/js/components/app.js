import React from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor() {
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    async onSearchSubmit(term) {
        try{

            let response =  axios.get('https://api.unsplash.com/search/photos', {
                headers: {
                    Authorization: 'Client-ID _8iW8ExWtxi8it6GEwn8OFGCI0hlSIhCH-rekzkf2XA'
                },
                params: {
                    query: term
                }
            })
            // console.log(response.data.results)
        } catch(err){
            console.log(err)
        }
    }

    render() {
        return pug`
        div.ui.container
        SearchBar(onSubmit= ${this.onSearchSubmit})
        `
    }
}

export default App;