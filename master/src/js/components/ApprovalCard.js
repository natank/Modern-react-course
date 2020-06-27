import React from 'react';

const ApprovalCard = (props) => {
  ${ } return pug`
    .ui.card
      .content ${props.children}
      .extra.content
        .ui.two.buttons
          .ui.basic.green.button Approve
          .ui.basic.red.button Reject
  `
}

export default ApprovalCard