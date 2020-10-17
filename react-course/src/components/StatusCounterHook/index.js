import React, { useState, useEffect } from 'react';

const StatusCounter = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        const handleStateChange = (status) => {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeFriendStatus(props.friend.id, handleStateChange)
        return () => {
            ChatAPI.unsubscribeFromFiendsStatus(props.friend.id, handleStateChange)
        }
    })
    if(isOnline === null) {
        return 'Loading'
    }
    return isOnline ? 'Online' : 'Offline'
}
export default StatusCounter