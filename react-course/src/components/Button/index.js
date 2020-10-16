import React, { Component } from 'react'
import './index.css'

export default class Button extends Component {
    constructor(props){
        super(props);
    }
    handleClick = () => {
        this.props.onClickHandle && this.props.onClickHandle();
    }
    render(){
        const { text } = this.props
        return(     
            <button className='primary-button' onClick={this.handleClick}><p className='text-button'>{text}</p></button>       
        )
    }
}