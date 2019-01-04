import React, { Component } from 'react'
import logo from './logo.svg'
import './Logo.scss'
import packageJson from '../../../package.json'

class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <header className="Logo-header">
                    <h1>{packageJson.name}</h1>
                    <h3>
                        v{packageJson.version} / {process.env.NODE_ENV}
                        <br />
                        {packageJson.description}
                    </h3>
                    <img src={logo} className="Logo-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default Logo
