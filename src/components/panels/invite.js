import React from 'react'
import img from '../../img/share.png'

const allCss = {
  'textAlign': 'center',
  'top': 0,
  'bottom': 0,
  'left': 0,
  'right': 0,
  'margin': 'auto'
}

const css ={
	'width': '200px',
	'height': '450px',
	'marginTop':'5px',
	'border': '1px solid black',
	'paddingTop': '10px',
	'color': 'black',

	'fontFamily': 'Tahoma',
	'fontWeight': 'bold',
	'fontSize': '20px',
}

const innerCss = {
	'fontFamily':'Tahoma',
	'fontSize':'11px',
	'fontWeight':'normal',

	'marginTop': '100px'
}

const buttonCss = {
	'backgroundColor': '#3B5998',
	'color': 'white',
	'width': '180px',
	'height': '40px',
	'cursor': 'pointer',
	'fontSize': '15px',
	'paddingTop': '10px',
	'marginLeft': '10px',
	'marginTop': '50px'
}

const shareClick = () => {
	window.FB.ui({method:'apprequests', message:"Come and join TopTipr: www.toptipr.com"});
}

const invite = () => {

	return(
		<div style={allCss}>
			<div style = {css}>
				<p>Invite friends</p>
				<img src={img} alt='share' width="100px" height="100px"/>
			<div style={innerCss}>
				<p>More people means more fun. </p>
				<p>Invite your friends so they can they can have a great time too.</p>
			</div>
			<div style={buttonCss} onClick={() => shareClick()}>Start here</div>
		</div>
		</div>
	);
}

export default invite;