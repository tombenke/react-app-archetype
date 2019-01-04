import React, { Component } from 'react'
import './Monitoring.scss'

class Monitoring extends Component {
    refreshServerStatus = e => {
        e.preventDefault()
        console.log('Will refresh server status.', this.props)
        this.props.getMonitoringIsAlive()
    }

    render() {
        if (this.props.getMonitoringIsAliveState === 'IDLE') {
            if (this.props.isAlive) {
                return (
                    <span>
                        <button type="button" className="MonitoringAlive" onClick={this.refreshServerStatus}>
                            Server is ALIVE (Click to Refresh)
                        </button>
                    </span>
                )
            } else {
                return (
                    <span>
                        <button type="button" className="MonitoringNotAlive" onClick={this.refreshServerStatus}>
                            Server is NOT ALIVE (Click to Refresh)
                        </button>
                    </span>
                )
            }
        } else {
            return <span className="MonitoringFetching">Fetching Server Status...</span>
        }
    }
}

export default Monitoring
