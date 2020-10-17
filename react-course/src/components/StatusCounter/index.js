import React , { Component } from 'react'

export default class StatusCounter extends Component {
    constructor(props) {
        this.state = {
            count: 0,
            isOnline: null
        }
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        ChatAPI.subscribeToFriendStatus(
            this.props.fiends.id,
            this.handleStateChange
        )
    }

    componentDidUpdate() {
        document.title = `you clicked ${this.state.count} times`
    }

    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
            this.props.fiends.id,
            this.handleStateChange
        )
    }

    handleStateChange = (status) => {
        this.setState({
            isOnline: status.isOnline
        })
    }
    render() {
        if( this.state.isOnline === null) {
            return 'Loading...'
        }
        return this.state.isOnline ? 'Online' : 'Offline'
    }
}