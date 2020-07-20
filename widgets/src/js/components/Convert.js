import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDeboouncedText] = useState();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboouncedText(text);
    }, 500)
    return () => {
      clearTimeout(timerId)
    }
  }, [text])


  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslated(data.data.translations[0].translatedText);
    }

    doTranslation();

  }, [language, debouncedText])
  return pug`
    div
      h1.ui.header
        | ${translated}
  `
}

export default Convert;