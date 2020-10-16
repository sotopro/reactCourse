import React, { Component } from 'react';
import Title from './components/Title'
import Button from './components/Button'
import data from './utils/data';
import Card from './components/Card'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonText: 'Continuar'
    }
  }
  handleClick = () => {
    this.setState({
      buttonText: 'Gracias por hacer Click'
    })
  }
  showAdditional = (additional) => {
    const aletInformation = Object.entries(additional)
    .map(information => `${information[0]} : ${information[1]}`)
    .join('\n');
    alert(aletInformation)
  }
  render(){
    const { buttonText} = this.state;
  return (
    <div className="App">
      <h2>Bienvenidos</h2>
      <Title text='Curso de React Js'/>
      <Button text={buttonText} onClickHandle={this.handleClick}/>
      <div className='wrapper'>
      {data.map(animal => (
        <Card showAdditional={this.showAdditional} key={animal.name} name={animal.name} additional={animal.additional} diet={animal.diet} scientificName={animal.scientificName} size={animal.size}/>
      ))}
      </div>
    </div>
  );
}
}

export default App;
