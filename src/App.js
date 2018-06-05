import React, { Component } from 'react';
import './App.css'
//import AuthComponent from './components/AuthComponent'
import FindButtonComponent from './components/FindButtonComponent'
import GeolocationComponent from './components/GeolocationComponent'
import ListViewRenderComponent from './components/ListViewRenderComponent'

class App extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div>
            <GeolocationComponent />
            {/*<AuthComponent nextStep={this.nextStep} />*/}
          </div>
          )
      case 2:
        return <FindButtonComponent nextStep={this.nextStep} />
      case 3:
        return <ListViewRenderComponent nextStep={this.nextStep} />
      default:
        return null;
    }
  }
}

export default App;
