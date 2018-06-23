import React, { Component } from 'react';
import { render } from 'react-dom';
import AppRoutes from './components/routes/appRoutes'
import Spinner from './components/spinner/spinner'
import isUserLoggedIn from './components/login/authHandler'

class App extends Component {

  constructor() {
    super()

    this.loginInfoHandler = this.loginInfoHandler.bind(this)

    this.state = {
      isLoggedIn: false,
      isInitialised: false
    }
  }

  loginInfoHandler(loggedIn) {
    this.setState({ isLoggedIn: loggedIn, isInitialised: true })
  }

  componentDidMount() {
    isUserLoggedIn(this.loginInfoHandler)
  }

  render() {
 
    return (
      this.state.isInitialised ?
        <AppRoutes isLoggedIn={this.state.isLoggedIn} /> :
        <Spinner />
    );
  }
}
render(<App />, document.getElementById('root'));
