import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos)
  const renderedList = videos.map(video => {
    return pug`
      VideoItem(video=video
        onVideoSelect=onVideoSelect
        key = video.etag
        )
    `
  })

  return pug`
    div.ui.relaxed.divided.list  
      ${renderedList}
  `
}

export default VideoList;