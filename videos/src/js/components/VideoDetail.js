import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return pug`
      div Lodaing...
    `
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return pug`
    div
      div.ui.embed
        iframe(title= "video player" src= videoSrc)
      div 
        div.ui.segment
          h4.ui.header ${video.snippet.title}
          p ${video.snippet.description}
  `
}

export default VideoDetail;