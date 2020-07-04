import './VideoItem.css';
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  let title = video.snippet.title;
  let thumbnail = video.snippet.thumbnails.medium.url;
  let item = pug`
    .item.video-item(onClick= ()=> {onVideoSelect(video)})
      img(src=thumbnail, alt=title).ui.image
      .content
        .header
          | ${title}
  `

  return item;
}

export default VideoItem;