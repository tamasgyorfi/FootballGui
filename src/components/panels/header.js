import React from 'react'
import logo from "../../img/logo.png"

const css = {
  'backgroundColor' : '#3B5998',
  'color': 'white',

  'fontFamily': 'Tahoma',
  'fontSize': '32px',
  'margin': 0,
  'textAlign': 'center',
  'position': 'relative',
  'justifyContent': 'center',
  'verticalAlign': 'middle'
}

const logoCss = {
  'float': 'left'
}

const header = () => {
  return(
      <div style={css}>
        <img src={logo} alt="place" style={logoCss} height="60px" width="60px"/>
        <div style={{"paddingTop":"25px"}}>
          TopTipr
        </div>
      </ div>
  );
}

export default header;