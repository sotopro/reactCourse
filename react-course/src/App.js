import React, { Component } from 'react';
import Product from './components/ProductHook'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
  return (
      <div>
          <Product />
      </div>
  )

	}
}

export default App;
