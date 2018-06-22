import React from 'react'


const button = (props) => {

  const innerCss = {
    'backgroundColor': '#279B0B',
    'borderStyle': 'solid',
    'borderWidth': '1px',
    'borderColor': 'white',
    'height': props.height - 5 + 'px',
    'width': props.width - 10 + 'px',
    'lineHeight': props.height - 5 + 'px',

    'marginLeft': '3px',

    'fontFamily': 'Tahoma',
    'fontSize': '20px',

    'color': 'white',
    'textAlign': 'center'
  }
  const outerCss = {
    'paddingTop': '3px',

    'backgroundColor': '#279B0B',
    'height': props.height + 'px',
    'width': props.width + 'px',


    'justifyContent': 'center',
    'alignContent': 'center',
    'flexDirection': 'column'
  }

  const allStyles = Object.assign({}, outerCss, props.style)

  console.log(allStyles)

  return (
    <div style={outerCss}>
      <div style={innerCss}>
        {props.text}
      </div>
    </div>
  );
}

export default button;