import React from 'react'

const Spinner  = (props) => {
    return pug `
        .ui.active.dimmer
            .ui.indeterminate.text.loader ${props.spinnerText}
    `
}

Spinner.defaultProps = {
    spinnerText: "Loading..."
}

export default Spinner;