import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, condition, redirect, ...rest }) => {


  return(<Route {...rest} render={(props) => (
    condition === true
      ? <Component {...props} />
      : <Redirect to={redirect} />
  )} />
)
}
export default PrivateRoute;