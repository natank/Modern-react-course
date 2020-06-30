import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
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
      Spinner()
    `    
  }

  render() {
    return pug`
      div.border.red
        ${this.renderContent()}
    `
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))