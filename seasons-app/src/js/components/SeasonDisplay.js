import '../../styles/SeasonDisplay.css'
import React from 'react';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer':'winter';
  } else {
    return lat > 0 ? 'winter':'summer';
  }
}

const seasonConfig = {
  summer: {
    message: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    message: 'Burr it is cold!',
    iconName: 'snowFlake'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {message, iconName} = seasonConfig[season];
  return pug`
   div(className = ${`season-display ${season}`})
    i(className=${`${iconName} icon`}).massive.icon-left
    h1 ${message}
    i(className = ${`${iconName} icon`}).massive.icon-right
  `
}

export default SeasonDisplay;