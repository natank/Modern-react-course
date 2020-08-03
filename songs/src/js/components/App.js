import React from "react";
import { selectSong } from '../actions';
import SongList from './SongList';


const App = () => {

  return (
    pug`
      div
        ${SongList}
    `
  )

}

export default App