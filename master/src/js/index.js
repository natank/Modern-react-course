import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'
import faker from 'faker';
const App = () => {
  return pug`
  
    .ui.container.comments
        ApprovalCard
          CommentDetail(
            author="Sam", 
            timeAgo="Today at 4:45PM" 
            text="The way it used to be...", 
            imgUrl=faker.image.avatar())
        ApprovalCard
          CommentDetail(
            author="Alex", 
            timeAgo="Today at 2:00AM", 
            text="Details to take care of", 
            imgUrl=faker.image.avatar())
        ApprovalCard
          CommentDetail(
          author="Jane",
          timeAgo="Yesterday at 5:00PM", 
          text="Nice blog post", 
          imgUrl=faker.image.avatar())
  `
}

ReactDOM.render(pug`App`, document.querySelector('#root'));