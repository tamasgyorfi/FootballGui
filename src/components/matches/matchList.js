import React, { Component } from 'react';
import MatchCard from './matchCard'
import Button from '../elements/button'

const css = {
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

const buttonCss = {
  'float': 'right',
  'marginBottom': '20px',
  'marginRight': '30px',
  'paddingTop': '50px',
  'paddingLeft': '100px'

}

class MatchList extends Component {

  constructor(props) {

    super();

    this.state = {
      matches: [{            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"},

      {            
        homeTeamImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png",
        awayTeamImg: "https://seeklogo.com/images/R/real-madrid-club-crest-new-logo-03D0B23BC4-seeklogo.com.png",
        homeTeamName: "Manchester United",
        awayTeamName: "Real Madrid",
        homeTeamGoals: "1",
        awayTeamGoals: "2",
        date: "2019/03/12 : 13:00"}

        ]
    }
  }

  predictionUpdated(payload) {
    var id = payload.id
    var oldItem = this.state.matches[id]
    payload.side === "HOME" ?
      this.state.matches[id].homeTeamGoals = payload.nrOfGoals :
      this.state.matches[id].awayTeamGoals = payload.nrOfGoals
  }

  render() {
    const matchCards = this.state.matches.map((element, nr) => { return(
          <MatchCard key = {nr}
            homeTeamImg = {element.homeTeamImg}
            awayTeamImg = {element.awayTeamImg}
            homeTeamName = {element.homeTeamName}
            awayTeamName = {element.awayTeamName}
            homeTeamGoals = {element.homeTeamGoals}
            awayTeamGoals = {element.awayTeamGoals}
            date = {element.date}
            onChange = {(payload) => this.predictionUpdated(payload)}
            id = {nr}
          />)
    });

    return (
      <div>
        <div style={buttonCss}>
          <Button text='Send' height="50" width="200" style={buttonCss} />
        </div>
        <div style={css}>
          {matchCards}
        </div>
      </div>);
  }
}
export default MatchList;