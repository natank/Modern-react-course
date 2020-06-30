import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return pug`
        div Error: ${this.state.errorMessage}
      `
    }
    if (!this.state.errorMessage && this.state.lat) {
      console.log(`state: ${JSON.stringify(this.state)}`)
      return pug`
         SeasonDisplay(lat= ${this.state.lat})
        `
    }
    return pug`
      div Loading!
    `
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))