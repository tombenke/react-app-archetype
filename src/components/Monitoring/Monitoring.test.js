import React from 'react'
import ReactDOM from 'react-dom'
import Monitoring from './Monitoring'

it('renders without crashing, IDLE, ALIVE', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Monitoring getMonitoringIsAliveState={'IDLE'} isAlive={true} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing, IDLE, NOT-ALIVE', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Monitoring getMonitoringIsAliveState={'IDLE'} isAlive={false} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing FETCHING, ALIVE', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Monitoring getMonitoringIsAliveState={'FETCHING'} isAlive={true} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing FETCHING, NOT-ALIVE', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Monitoring getMonitoringIsAliveState={'FETCHING'} isAlive={false} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
