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
  'fontFamily': 'Tahoma',
  'color': 'black'
}
class TeamCard extends Component {

  constructor(props) {
    super();
    this.state = { nrOfGoals: props.goals }
  }

  onChangeHandler(e) {
    this.setState({ nrOfGoals: e.target.value })
  }

  getNrOfGoals = () => {
    return this.state.nrOfGoals
  }

  render = () => {
    return (
      <div style={divStyle}>
        <img src={this.props.img} height="50" width="50" />
        <p>{this.props.name}</p>
        <input type="number" min="0" max="30" style={textEditStyle} value={this.state.nrOfGoals} onChange={(e) => this.onChangeHandler(e)} />
      </div>);
  }
}
export default TeamCard;