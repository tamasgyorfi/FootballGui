import React,{Component} from 'react'
import {getUserFriends, trackUser, untrackUser} from '../../gateway/gateway'
import FriendCard from './friendCard'
import Spinner from '../spinner/spinner'
import Invite from '../panels/invite'

const css = {
  'height': '700px',
  'marginRight': '30px',
  'overflow': 'auto',
  'marginTop': '50px',
  'maxWidth': '1100px',
  'backgroundColor': 'white',
  'paddingTop': '50px',
  'paddingLeft': '100px',

  'color': 'black',
  'fontFamily': 'Tahoma'
}

const rightSideCss = {
  'float': 'right',
  'marginBottom': '20px',
  'marginRight': '30px',
  'paddingTop': '50px',
  'paddingLeft': '100px'
}

class FriendsList extends Component {

	constructor() {
		super();
		this.state = {
			friends: [],
			leagueFriends: [],
			lFriendsDone: false,
			fbFriendsDone: false,
			userServiceError: false,
			facebookError: false
		}
	}

	componentDidMount() {
		this.getFriends()
		this.getLeagueFriends()
	}

	clickHandler(id, tracked, callback) {
		const funcToCall = tracked ? untrackUser : trackUser

		funcToCall(id).
			then(function(response) {
				if (response.ok) {
					callback("success")
				} else {
					callback("failure")
				}
			})
	}

	isTracked(fbUserId) {
		for(var i = 0, len = this.state.leagueFriends.length; i < len; i++) {
			if (this.state.leagueFriends[i].id === fbUserId) {
				return true;
			}
		}
		return false;
	}

	render() {
		if (!this.state.lFriendsDone || !this.state.fbFriendsDone) {
			return(<Spinner />);
		}

		const friendsList = (this.state.fbFriendsDone && this.state.friends.length === 0) ?
			<div> None of your friends seem to paly TopTipr. No worries, though, you can invite them to get it started! </div>
			:
			this.state.friends.map(friend => { return (
				<FriendCard name={friend.name} 
					id={friend.id} 
					picture={friend.picture.data.url} 
					isTracked={this.isTracked(friend.id)} 
					updateHandler={(id, tracked,callback)=>this.clickHandler(id, tracked, callback)}
					key={friend.id}
					isError = {this.state.userServiceError}
					/>
			)})

		return(
			<div>
				<div style={rightSideCss}>
					<Invite />
				</div>
				<div style={css}>
					{friendsList}
				</div>
			</div>
		);
	}

	getFriends() {
		window.FB.api(
    	"/me/friends", {fields: "id,name,picture"},
    	function (response) {
     		if (response && response.data){
        		this.setState({
        			friends: response.data,
        			fbFriendsDone: true
        		});
      		}  else {
      			this.setState({
      				facebookError: true,
      				fbFriendsDone: true
      			})
      		}
		}.bind(this))
	}

	getLeagueFriends() {
		getUserFriends().
			then(function(response){
				if (response.ok) {
					return response.json()
				} else {
					this.setState({
						lFriendsDone:true,
						userServiceError: true
					})
				}
			}.bind(this)).
			then(function(json){
				this.setState({
					leagueFriends: json.payload,
					lFriendsDone: true
				})
			}.bind(this))
	}
}
export default FriendsList;