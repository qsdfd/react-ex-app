import React, { Component } from 'react';
import Quotes from './components/quotes/Quotes'
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
      </div>
    );
  }
}

export default App;
