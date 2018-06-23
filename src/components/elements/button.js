import React from 'react'


const button = (props) => {

  const innerCss = {
    'backgroundColor': '#263142',
    'borderStyle': 'solid',
    'borderWidth': '1px',
    'borderColor': 'white',
    'height': props.height + 'px',
    'width': props.width + 'px',
    'lineHeight': props.height  + 'px',

    'marginLeft': '3px',

    'fontFamily': 'Tahoma',
    'fontSize': '20px',

    'color': 'white',
    'textAlign': 'center',
    'letterSpacing': '5px',
    'borderRadius': '15px',
    'cursor': 'pointer'
  }
 
  const allStyles = Object.assign({}, innerCss, props.style)

  console.log(allStyles)

  return (
    <div style={innerCss} onClick = {props.onClick}>
      {props.text}
    </div>
  );
}

export default button;