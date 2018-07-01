import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MatchList from '../matches/matchList'
import Login from '../login/login'
import PrivateRoute from '../routes/privateRoute'
import MatchPage from '../matches/matchPage'
import FriendsPage from '../friends/friendsPage'

const appRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={MatchPage} condition={props.isLoggedIn} redirect='/login' />
        <PrivateRoute exact path='/friends' component={FriendsPage} condition={props.isLoggedIn} redirect='/login' />
        <PrivateRoute path='/login' component={Login} condition={!props.isLoggedIn} redirect='/' />
      </Switch>
    </BrowserRouter>);
}

export default appRoutes;