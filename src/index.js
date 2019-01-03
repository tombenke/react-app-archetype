import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { Logo } from './components/Logo/'
import * as serviceWorker from './serviceWorker'
import { configureStore } from '@tombenke/redux-app'
//
// Create the store
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/" name="Logo" component={Logo} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
