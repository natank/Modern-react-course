import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([])
  useEffect(() => {
    if (term && !results.length) {
      search()
    } else {
      const timeoutId = setTimeout(() => {
        if (term) search()
      }, 500)
      return () => {
        clearTimeout(timeoutId);
      }
    }


    async function search() {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      })
      setResults(data.query.search);
    }


  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </div>
    )
  }
  )
  return pug`
      div
        .ui.form
        .field
          label Enter Search Term
          input.input(value = term, onChange = ${ e => setTerm(e.target.value)})
          .ui.celled.list
            ${ renderedResults}
  `
}

export default Search;