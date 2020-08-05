import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions';

const SongList = function (props) {
  function renderList(){
    return props.songs.map((song)=>{
      return pug`
        .item(key=${song.title})
          .right.floated.content
            button.ui.button.primary(onClick=${()=> props.selectSong(song)})
              | Select
          .content
            | ${song.title}
          
      `
    })
  }
  return pug`
    .ui.divided.list
      | ${renderList()}
  `
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, {
  selectSong
})(SongList)