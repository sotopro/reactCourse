import React from 'react';

export default class App extends React.Component {
    handleClick = () => {
        alert('Hi there!');
    }
    componentDidMount(){
        document.getElementById('dialog')
        .addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
        document.getElementById('dialog')
        .removeEventListener('click', this.handleClick)
    }

    render(){
        // return <button id='dialog' onClick={this.handleClick}>Say something</button>
        return <button id="dialog">Say something! </button>
    }
}

