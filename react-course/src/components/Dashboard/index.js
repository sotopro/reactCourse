import React from 'react';
import styled from 'styled-components'
import Profiles from '../Profiles'
import CounterHook from '../CounterHook'
import {CounterMemo} from '../CounterMemo'
import InputFocus from '../InputFocus';
import UserProfile from '../UserProfile'

const Dashboard = ({ handleLogout }) => {
    return (
        <section className="dashboard">
            <nav>
                <h2>Welcome!</h2>
                <button onClick={ handleLogout}>Logout</button>
            </nav>
            <div>
                <Profiles />
                {/* <CounterHook />
                <CounterMemo /> */}
                {/* <InputFocus /> */}
                <UserProfile />
            </div>
        </section>
    )
}

export default Dashboard;