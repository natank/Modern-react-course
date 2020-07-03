import './ImageList.css'
import React from 'react';
import ImageCard from './imageCard';

const ImageList = (props) => {
  const images = props.images.map(image => {
    return pug`
      ImageCard(key=image.id image=image)
    `
  })
  console.log(images);
  return pug`
    div(className="image-list")
      ${images}
  `
}

export default ImageList;