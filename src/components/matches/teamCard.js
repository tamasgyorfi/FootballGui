import React, { Component } from 'react';

const textEditStyle = {
  width: '60%',
  height: '30px',
  'textAlign': 'center',
  'backgroundColor': '#f0f0f5',
  'color': 'black'
}

const divStyle = {
  display: 'inline-block',
  'textAlign': 'center',
  'backgroundColor': '#f0f0f5',
  'width': '150px',
  'marginBottom': '50px',
  'marginTop': '10px',
  'fontFamily': 'Tahoma',
  'color': 'black'
}
class TeamCard extends Component {

  constructor(props) {
    super();
    this.state = { 
      nrOfGoals: props.goals,
      side: props.side,
      id: props.id
    }
  }

  onChangeHandler(e) {
    var val = e.target.value
    this.props.onChange({
      nrOfGoals: val,
      side: this.state.side,
      id: this.state.id
    })

    this.setState({ nrOfGoals: e.target.value })
  }

  render = () => {
    return (
      <div style={divStyle}>
        <img src={this.props.img} height="50" width="50" />
        <p>{this.props.name}</p>
        <input type="number" 
          min="0" max="30" 
          style={textEditStyle} 
          value={this.state.nrOfGoals} 
          onChange={(e) => this.onChangeHandler(e)} 
          disabled={this.props.isDisabled}/>
      </div>);
  }
}

export default TeamCard;