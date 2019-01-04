import React from 'react'
import { storiesOf } from '@storybook/react'
import Monitoring from './Monitoring'

storiesOf('Monitoring', module).add('FETCHING', () => (
    <Monitoring getMonitoringIsAliveState={'FETCHING'} isAlive={false} />
))
storiesOf('Monitoring', module).add('FETCHING', () => (
    <Monitoring getMonitoringIsAliveState={'FETCHING'} isAlive={true} />
))
storiesOf('Monitoring', module).add('IDLE, isAlive: false', () => (
    <Monitoring getMonitoringIsAliveState={'IDLE'} isAlive={false} />
))
storiesOf('Monitoring', module).add('IDLE, isAlive: true', () => (
    <Monitoring getMonitoringIsAliveState={'IDLE'} isAlive={true} />
))
