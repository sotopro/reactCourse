import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash'
const UserProfile = () => {
    const [user, setUser] =useState({name: 'Daniel' , weight: 70})
    const gainWeight = () => {
        const newWeight = Math.random() >= 0.5 ? user.weight : user.weight + 1
        setUser(user => ({...user, weight: newWeight}))
    }

    const previousUser = usePrevious(user);
    useEffect(() => {
        if(!_.isEqual(previousUser, user)) {
            console.log('previousUser', previousUser)
            console.log('You need to do exercise!')
        }
    })
   return (
    <div className="containerCounter">
        <p>Current weight: {user.weight}Kg</p>
        <button onClick={gainWeight}>Eat burger</button>
    </div>
   ) 
}

export default UserProfile;

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}