import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  
  state = {
    libros : []
  }
  
  componentDidMount(){
    axios.get("http://localhost:3002/libros").then(datsoconseguidos => {
      this.setState({
        libros : datsoconseguidos.data
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.libros.map(libro => <h1>{ libro.titulo }</h1>)}
      </div>
    );
  }
}

export default App;
