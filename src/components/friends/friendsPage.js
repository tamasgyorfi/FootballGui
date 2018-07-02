import React, {Component} from 'react'
import Header from '../panels/header'
import FriendsList from './friendsList'
import MenuBar from '../panels/sidebar'

class FriendsPage extends Component {

	render() {
  		return (
    		<div>
      			<Header />
      			<MenuBar />
            <FriendsList />
    		</div>
  		);
	}
}
export default FriendsPage;