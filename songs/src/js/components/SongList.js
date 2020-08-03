import React from 'react';
import { connect } from 'react-redux';
function SongList() {
  return pug`
    div
      | SongList
  `
}

export default connect()(SongList())