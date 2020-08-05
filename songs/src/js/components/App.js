import React from "react";
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {

  return (
    pug`
      .ui.container.grid
        .ui.row
          .column.eight.wide
            SongList
          .column.eight.wide
            SongDetail
    `
  )

}

export default App