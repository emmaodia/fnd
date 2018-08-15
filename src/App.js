import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {

      state = {
        gists : []
      }

      componentDidMount() {
      axios.get(`https://api.github.com/gists/public`)
        .then(result => {
          const gists = result.data;
          this.setState({ gists });
        })
        .then(() => {
          console.log('success');
        })
        .catch((error) =>{
          console.log(error);
        })
    }

    render(){
      return(
        <ul>
        { this.state.gists.map(gist => <li>{gist.url}</li>)}
      </ul>
      );
    }
}

export default App;
