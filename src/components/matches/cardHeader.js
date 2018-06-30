import React from 'react'

const cardHeaderStyle = {
  'color': 'white',
  'textAlign': 'center',
  'fontFamily': 'Arial, Helvetica, sans-serif',
  'fontSize': '11px',
  'fontWeight': 'bold',
  'backgroundVlip': 'content-box',
  'alignItems': 'center',
  'paddingBottom': '2.5%',
  'paddingTop': '2px',
  height: '10%'
}

const enabledCss = {
    'backgroundColor': '#3B5998'
}

const disabledCss = {
    'backgroundColor': '#91969E'
}

const cardHeader = (props) => {

  var date = new Date(props.date).toLocaleString()
  var theCss = Object.assign({}, cardHeaderStyle, props.isDisabled ? disabledCss : enabledCss)

  return(
    <div style={theCss}>
      {props.competition} - {date}
    </div>
  );
}


export default cardHeader;