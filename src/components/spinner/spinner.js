import React from 'react'
import spin from '../../img/spin.gif'

const css = {
  'backgroundColor': '#35578f',
  'width': '350px',
  'height': '350px',
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
  'paddingTop': '50px',
  'margin': 'auto'
}

const outerCss = {
  'height': '700px',
  'marginRight': '30px',
  'overflow': 'scroll',
  'overflow': 'auto',
  'marginTop': '50px',
  'maxWidth': '1100px',
  'backgroundColor': 'white',
  'paddingTop': '50px',
  'paddingLeft': '100px'
}

const spinner = () => {
  return(
  	<div style={outerCss} >
  		<div style={css}>
  			<img src={spin} alt="" />
  			<div>Loading, please wait...</div>
  		</div>
  	</div>
  	);
}

export default spinner;