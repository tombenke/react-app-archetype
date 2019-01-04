import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf, addDecorator } from '@storybook/react'
import Welcome from './Welcome'
import configureStore from 'redux-mock-store'
import { initialState } from './fixtures/'

// Create the store
const mockStore = configureStore()

const store = mockStore(initialState)

const ProviderDecorator = getStory => <Provider store={store}>{getStory()}</Provider>
addDecorator(ProviderDecorator)
storiesOf('Welcome', module).add('Welcome component', () => <Welcome />)
