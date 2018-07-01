import React, { Component } from "react"
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import {registerUser} from '../../gateway/gateway'
import Header from '../panels/header'
import AppRoutes from '../routes/appRoutes'

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
        this.register()
        this.setState({ toMainPage: true })
      }
    }.bind(this), {scope: 'public_profile,user_friends'});
  }

  register() {
    window.FB.api(
      "/me", {fields: "id,name,picture"},
      function (response) {
        if (response){
          registerUser({
            id: response.id,
            name: response.name,
            pictureUrl: response.picture.data.url,
            token: ""
          }).then(function(response) {
            console.log(response)
          })
        }
      });
  }

  render() {
      if (this.state.toMainPage) {
        return (<AppRoutes isLoggedIn={true} />);
      }
         
      return(
          <div>
            <Header />
            <div onClick={this.onLoginClick} style={loginButtonCss}> Log in with Facebook </div>
          </div>
        );
  }
}

export default Login