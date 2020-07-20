import React, { useState } from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert';
const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Dutch',
    value: 'nl'
  }

]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    pug`
      div.container
        .ui.form
          .field
            label Enter Text
            input(value = ${text} onChange = ${e => setText(e.target.value)})
        Dropdown(label="Select a language" selected=${language} onSelectedChange=${setLanguage} options = ${options} )
        hr
        h3.ui.header
          | Output
        Convert(text=${text} language=${language})
    `
  )
}

export default Translate;
