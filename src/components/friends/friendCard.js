import React, {Component} from 'react'

const centerCss = {
  'float': 'right',
  'marginRight': '30px',
  'paddingLeft': '100px',
  'width': '900px',
  'height': '100px',
  'backgroundColor': '#f0f0f5',
  'paddingTop': '20px',

  'display': 'inline-block'
}

const imgCss = {
	'verticalAlign':'middle',
	'marginRight': '20px',
	'display': 'inline-block'
}

const nameCss = {
	'verticalAlign':'middle',
	'marginRight': '20px',
	'display': 'inline-block',
	'width': '400px'	
}

const buttonCss ={
	'verticalAlign':'middle',
	'marginRight': '20px',
	'display': 'inline-block',
	'width': '60px',
	'height': '30px',
	'paddingTop': '5px',
	'marginLeft': '20px',
    'cursor': 'pointer',
    'color':'white',
    'backgroundColor': '#3B5998',
    'textAlign':'center'
}

class FriendCard extends Component {
	constructor(props) {
		super();
		this.state = {
			isTracked : props.isTracked,
			inProgress: false
		};
		this.resultCallback = this.resultCallback.bind(this);
	}

	clickHandler() {
		this.setState({inProgress: true})
		this.props.updateHandler(this.props.id, this.state.isTracked, this.resultCallback)
	}

	resultCallback(result) {
		const tracked = this.state.isTracked
		if (result === "success") {
			this.setState({
				isTracked: !tracked,
				inProgress: false
			})
		} else {
			this.setState({inProgress: false})
		}
	}

	render() {
		const text = this.state.inProgress ? "..." : this.state.isTracked ? "Remove" : "ADD"
		const btn = this.props.isError ? 
			<div> Service temporarily down.</div>
			:<div style={buttonCss} onClick={() => this.clickHandler()}>
				{text}
			</div>

		return(
		<div style={centerCss}>
			<img style={imgCss} src={this.props.picture} alt="pic" />
			<div style={nameCss}>{this.props.name}</div>
			{btn}
		</div>);
	}
}

export default FriendCard;