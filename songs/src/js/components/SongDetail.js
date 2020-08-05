import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return pug`
            div Select Song
        `
    }
    return pug`
        div
            h3
                | Details for
            p
                | Title: ${song.title}
                br
                | Duration: ${song.duration}
    `
}
const mapStateToProps = state => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)