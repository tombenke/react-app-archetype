## About

This is a very simple react application, that implements only a few basic features.
Its main purpose is to demonstrate the separation and organization of the several architectural components
the whole application is made of.

This repository also can be used as a [kickoff](https://www.npmjs.com/package/kickoff) archetype to create similar applications.
It is true to the other system components that are used by this app as dependencies.

## Architecture

This is the architecture of the overall application:

![architecture](architecture.png)


### `react-redux-app`

This is the main project, that integrates the whole frontend application into a bundle.

This component includes the frontend business logic, and the reusable presentational component
as dependencies, and contains only those presentational components, that are specific to this application,
under the `src/components` folder.

See these components in the [storybook](storybook/index.html).

Note: This project should not contain the store, and other infrastructural code that implements business logic, or services calls.
These kind of functionalities should be packaged into a ui-state module, and used as a dependency.
See [@tombenke/redux-app](https://github.com/tombenke/redux-app) as an example.

### `monitoring-react-component`

The [monitoring-react-component](https://github.com/tombenke/monitoring-react-component) is a separate project,
that holds some reusable presentational components of the server monitoring feature.

Presentational components should not contain any business logic code,
except that is tightly connected to the internal presentational logic and state of the react components.

### `@tombenke/redux-app`

The [@tombenke/redux-app](https://github.com/tombenke/redux-app) is a
redux based application, that holds all the actions,
reducers and selectors that is needed to the frontend business logic of the application.

This project may holds all the business logic components, however it my include some external dependencies too.
Such a reusable redux component is the [monitoring-redux-component](https://github.com/tombenke/monitoring-redux-component).

Beside the redux components this project also contains the store,
and can be built into a headless application that can run on its own, without the presentational components.
The [redux-app-testbot](https://github.com/tombenke/redux-app-testbot) is an example for such a headless frontend application.

### `monitoring-redux-component`

The [monitoring-redux-component](https://github.com/tombenke/monitoring-redux-component)
is the redux state component of monitoring features for UI components.

This component holds all the actions, reducers and selectors that is needed 
to the frontend business logic of the monitoring features, including the service calls.

The module does not contain the store, only a mock-store for testing purposes.

### `redux-app-testbot`

The [react-redux-app-testbot](https://github.com/tombenke/react-redux-app-testbot)
is a template project for react frontend test bots.

It is a headless frontend application, in the meaning that it contains no presentational components,
however is uses a special `BotComponent`, that extends the `React.Component` class,
and can be bound to the actions and selectors of the [@tombenke/redux-app](https://github.com/tombenke/redux-app)
component via `connect` function of `react-redux`.

The main purpose of this module to provide a high-level API of the frontend business logic,
that can be used to write fullstack end-to-end tests.

These test cases use the very same functions that the end-users can use through the react presentational components,
so this way it is possible to efficiently automate regressional integration tests including the frontend code too.
The difference is that such tests can be executed in CI environments, similarly like the normal unit tests run,
and no need for using time and resource intensive technologies such as Selenium.

Obviously these tests will not involve the react components, that anyway will be tested withing their own test suite.

### `easer`

The [easer](https://github.com/tombenke/easer) is a simple,
generic express server with built-in authentication and authorization.
It provides the `GET /monitoring/isAlive` (and some similar REST endpoints) by default that is needed to run the end-to-end tests.

