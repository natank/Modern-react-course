import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function UserHeader(props) {

  const { user } = props

  if (!user) {
    return null
  }
  return pug`
    .header ${user.name}
  `
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps)(UserHeader)