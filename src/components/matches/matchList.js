import React, { Component } from 'react';
import MatchCard from './matchCard'
import Button from '../elements/button'
import Spinner from '../spinner/spinner'
import {NotificationManager} from 'react-notifications';
import InfoPanel from '../elements/infoPanel'
import MessageListener from '../../messaging/messaging'

import {convertInternalReprsentationToRequest, convertResponseToInternal} from './matchUtils/matchUtils'
import {fetchData, saveData} from '../../gateway/gateway'

import 'react-notifications/lib/notifications.css';

const css = {
  'height': '700px',
  'marginRight': '30px',
  'overflow': 'scroll',
  'overflow': 'auto',
  'marginTop': '50px',
  'maxWidth': '1100px',
  'backgroundColor': 'white',
  'paddingTop': '50px',
  'paddingLeft': '100px',
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
    super(props);

    this.messagListener = new MessageListener();
    this.state = {
      matches: props.data,
      dataReady: false,
      networkError: false,
      currentDate: 1
    }
  }

  componentDidMount() {
    this.messagListener.connect('time_channel', function(msg) {
      this.setState({ currentDate: new Date(msg.message[1].replace("[UTC]", "")).getTime() })
    }.bind(this))

    this.messagListener.getFirstFromHistory('time_channel', function(msg) {
      console.log("msg", msg.messages[0].entry[1].replace("[UTC]", ""))
      this.setState({ currentDate: new Date(msg.messages[0].entry[1].replace("[UTC]", "")).getTime() })
    }.bind(this))

    this.loadData()
  }

  loadData() {
     var userID = (window.FB.getAuthResponse() || {}).userID

      fetchData({userId: userID})
      .then(function(response) {
        console.log("Response: ", response)
          if (response.ok) {
            return response.json()
          } else {
            this.setState({
              networkError: true,
              dataReady: true
            })
          }
      }.bind(this))
      .then(function(json) {
          const convertedData = convertResponseToInternal(json)
          this.setState({
            dataReady: true,
            networkError: false,
            matches: convertedData
          })
      }.bind(this))
      .catch(function(ex) {
          this.setState({
            networkError: true,
            dataReady: true
          })
      }.bind(this))
  }

  predictionUpdated(payload) {
    var id = payload.id
    var oldItem = this.state.matches[id]

    this.state.changed = true
    this.state.matches[id].changed = true

    payload.side === "HOME" ?
      this.state.matches[id].homeTeamGoals = payload.nrOfGoals :
      this.state.matches[id].awayTeamGoals = payload.nrOfGoals
  }

  clickHandler() {
    const toSend = convertInternalReprsentationToRequest(this.state.matches.filter(element => element.changed))
    var userID = (window.FB.getAuthResponse() || {}).userID

    saveData(userID, toSend)
      .then(function(response) {
        if(response.ok) {
          NotificationManager.success('All done! Bet(s) successfully saved.', 'Success!');        
        } else {
          NotificationManager.error('There was an error saving the bet(s).', 'Ooops!');
        }
      }.bind(this))
      .catch(function(err) {
          NotificationManager.error('There was an error saving the bet(s).', 'Ooops!');
      }.bind(this));
  }

  render() {

    if (this.state.dataReady===false) {
      return (<Spinner />);
    } 

    if (this.state.networkError===true) {
      return(<InfoPanel isError={true} text="Unable to load matches." buttonText="Retry" onClick={()=>window.location.reload()}/>)
    }

    if (this.state.matches && this.state.matches.length === 0) {
      return (<InfoPanel isError={false} text="There are no matches scheduled." buttonText="Retry" onClick={()=>window.location.reload()}/>)
    }

    const matchCards = this.state.matches.map((element, nr) => { return(
          <MatchCard key = {nr}
            homeTeamImg = {element.homeTeamImg}
            awayTeamImg = {element.awayTeamImg}
            homeTeamName = {element.homeTeamName}
            awayTeamName = {element.awayTeamName}
            homeTeamGoals = {element.homeTeamGoals}
            awayTeamGoals = {element.awayTeamGoals}
            date = {element.date}
            competition = {element.competition}
            onChange = {(payload) => this.predictionUpdated(payload)}
            isDisabled = {element.date < this.state.currentDate}
            id = {nr}
          />)
    });

    const sendButton = (!this.state.matches || this.state.matches.length<1) ? 
      <div />  : 
      <Button text='Send' height="50" width="200" style={buttonCss} onClick = {() => this.clickHandler()}/>

    return (
      <div>
        <div style={buttonCss}>
        {sendButton}
        </div>
        <div style={css}>
          {matchCards}
        </div>
      </div>);

  }
}
export default MatchList;