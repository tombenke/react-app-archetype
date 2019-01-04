import { connect } from 'react-redux'
import { getMonitoringIsAlive, monitoringIsAliveSelector, getMonitoringIsAliveStateSelector } from '@tombenke/redux-app'
import { default as MonitoringComponent } from './Monitoring'

const mapStateToProps = state => ({
    isAlive: monitoringIsAliveSelector(state),
    getMonitoringIsAliveState: getMonitoringIsAliveStateSelector(state)
})

const mapDispatchToProps = {
    getMonitoringIsAlive
}

const Monitoring = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonitoringComponent)

export default Monitoring
