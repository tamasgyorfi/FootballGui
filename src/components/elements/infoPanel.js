import React from 'react'
import errorImg from '../../img/Error.png'
import infoImg from '../../img/info.png'
import Button from './button'

const errorCss = {
	'backgroundColor': '#efc6c8'
}

const infoCss = {
	'backgroundColor': '#cfd8fc'
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

const commonCss = {
  'height': '300px',
  'width': '500px', 
  'textAlign': 'center',

  'fontFamily': 'Tahoma',
  'position': 'absolute',
  'top': 0,
  'bottom': 0,
  'left': 0,
  'right': 0,

  'borderRadius': '10px',
  'textAlign': 'center',

  'fontSize': '32px',
  'paddingTop': '25px',
  'margin': 'auto'
}

const infoPanel= (props) => {
	const css = Object.assign({}, commonCss, props.isError ? errorCss : infoCss);

	return(
		<div style={outerCss}>
		<div style = {css}>
			<img src={props.isError ? errorImg : infoImg} />
			<div style={{'marginTop':'20px', 'marginBottom':'40px'}}>
				{props.text}
			</div>
			<Button text={props.buttonText} onClick = {() => props.onClick()} />
		</div>
		</div>
	);
}

export default infoPanel;