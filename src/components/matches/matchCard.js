import React, { Component } from 'react';
import TeamCard from './teamCard'
import CardHeader from './cardHeader'

const matchCardStyle = {
  'border': '1px solid #3B5998',

  'height': 195,
  'display': 'inline-block',
  'backgroundColor': '#f0f0f5',
  'marginRight': '25px',
  'marginBottom': '25px',
  'float': 'left',
  'minWidth': '300px'
}

class MatchCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const home = <TeamCard
      img={this.props.homeTeamImg}
      goals={this.props.homeTeamGoals}
      name={this.props.homeTeamName} />

    const away = <TeamCard
      img={this.props.awayTeamImg}
      goals={this.props.awayTeamGoals}
      name={this.props.awayTeamName} />

    return (
      <div style={matchCardStyle}>

        <CardHeader date={this.props.date} />
        {home}
        {away}

      </div>);
  }
}
export default MatchCard;