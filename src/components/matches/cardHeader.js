import React from 'react'

const cardHeaderStyle = {
  'backgroundColor': '#3B5998',
  'color': 'white',
  'textAlign': 'center',
  'fontFamily': 'Arial, Helvetica, sans-serif',
  'fontSize': '11px',
  'fontWeight': 'bold',
  'backgroundVlip': 'content-box',
  'alignItems': 'center',
  'paddingBottom': '2.5%',
  height: '10%'
}

const cardHeader = (props) => {

  return(
    <div style={cardHeaderStyle}>
      {props.date}
    </div>
  );
}

export default cardHeader;