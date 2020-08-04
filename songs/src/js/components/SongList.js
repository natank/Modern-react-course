import React from 'react';
import { connect } from 'react-redux';
const SongList = function () {
  props
  return pug`
    div
      | SongList
  `
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongList)