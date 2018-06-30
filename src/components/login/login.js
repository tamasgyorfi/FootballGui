import React, { Component } from "react"
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const loginButtonCss = {
  'backgroundColor': '#3B5998',
  'width': '350px',
  'height': '45px',
  'position': 'absolute',
  'top': 0,
  'bottom': 0,
  'left': 0,
  'right': 0,

  'borderRadius': '10px',
  'textAlign': 'center',

  'cursor': 'pointer',

  'fontFamily':'Tahoma',
  'color': 'white',
  'fontSize': '32px',

  'margin': 'auto'
}

class Login extends Component {

  constructor() {
    super()
    this.state = { toMainPage: false }
  }

  onLoginClick = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        this.setState({ toMainPage: true })
      }
    }.bind(this));
  }

  render() {
    return (
      this.state.toMainPage ?
        <Redirect to='/' /> :
        <div onClick={this.onLoginClick} style={loginButtonCss}> Log in with Facebook </div>
    );
  }
}

export default Login