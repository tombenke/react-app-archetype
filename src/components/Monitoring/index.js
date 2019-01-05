import { connect } from 'react-redux'
import { getMonitoringIsAlive, monitoringIsAliveSelector, getMonitoringIsAliveStateSelector } from '@tombenke/redux-app'
import { Monitoring as MonitoringComponent } from 'monitoring-react-component'

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
