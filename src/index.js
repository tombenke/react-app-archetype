import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import Welcome from './components/Welcome/'
import Logo from './components/Logo/'
import Monitoring from './components/Monitoring/'
import * as serviceWorker from './serviceWorker'
import { configureStore } from '@tombenke/redux-app'
//
// Create the store
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" name="Welcome" component={Welcome} />
                <Route path="/logo" name="Logo" component={Logo} />
                <Route path="/monitoring" name="Monitoring" component={Monitoring} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
