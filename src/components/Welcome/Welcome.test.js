import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from './fixtures/'

const mockStore = configureStore()
const store = mockStore(initialState)

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <Provider store={store}>
            <Welcome />
        </Provider>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})
