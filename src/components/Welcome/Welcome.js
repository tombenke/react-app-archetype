import React, { Component } from 'react'
import './Welcome.scss'
import Logo from '../Logo/'
import Monitoring from '../Monitoring/'

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <Logo />
                <Monitoring />
                <a className="Logo-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React.
                </a>
            </div>
        )
    }
}

export default Welcome
