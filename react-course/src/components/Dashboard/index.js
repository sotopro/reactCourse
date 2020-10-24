import React from 'react';
import styled from 'styled-components'
import Profiles from '../Profiles'

const Container = styled.div `
    width: 100vw;
    height: 100vh;
`

const Dashboard = ({ handleLogout }) => {
    return (
        <section className="dashboard">
            <nav>
                <h2>Welcome!</h2>
                <button onClick={ handleLogout}>Logout</button>
            </nav>
            <Container>
                <Profiles />
            </Container>
        </section>
    )
}

export default Dashboard;