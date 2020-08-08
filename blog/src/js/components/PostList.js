import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = function (props) {
  useEffect(() => {
    props.fetchPostsAndUsers();
    return () => {
      alert('doing cleanup!!!')
      console.log(`doing cleanup!!!`)
    }
  }, [])

  function renderList() {
    if (props.posts) {
      return props.posts.map(post => {
        return pug`
          .item(key=post.id)
            i.large.middle.aligned.icon.user
            .content
              .description
                h2 ${post.title}
                p ${post.body}
              UserHeader(userId = ${post.userId})
        `
      })
    }
  }


  return pug`
    .ui.relaxed.divided.list ${renderList()}
      
  `
}

const mapStateToProps = (state) => {
  return { posts: state.posts, users: state.users }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);