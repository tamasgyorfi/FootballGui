import React from 'react'
import logo from "../../img/logo.png"

const css = {
  'backgroundColor' : '#3B5998',
  'height': '90px',
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
        <img source={logo} alt="place" style={logoCss}/>
        <div>
          TopTipr
        </div>
      </ div>
  );
}

export default header;