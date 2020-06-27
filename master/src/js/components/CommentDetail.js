import React from 'react';
import ReactDOM from 'react-dom';


const CommentDetail = (props) => {
  return pug`
    div(className="ui container comments")
      div(className="comment")
        a(href="/" className="avatar")
          img(alt="avatar" src=${props.imgUrl})
        div(className="content")
          a(href="/" className="author") ${props.author}
          div(className="metadata")
            span(className="date") ${props.timeAgo}
          div(className="text") ${props.text}
    `
}

export default CommentDetail