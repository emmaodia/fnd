import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {

      state = {
        gists = []
      }

      componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render(){
      return(
        <div>THis works</div>
      );
    }
}

export default App;
