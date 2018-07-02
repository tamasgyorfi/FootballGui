import React, {Component} from 'react'
import Header from '../panels/header'
import MatchList from './matchList'
import MenuBar from '../panels/sidebar'

import {NotificationContainer} from 'react-notifications';


class MatchPage extends Component {

	render() {
  		return (
    		<div>
      			<Header />
      			<MenuBar />
            <MatchList />
            <NotificationContainer />
    		</div>
  		);
	}
}
export default MatchPage;