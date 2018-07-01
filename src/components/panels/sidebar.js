import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from "reactrix-sidebar";
import {Link} from 'react-router-dom'
import "reactrix-sidebar/index.css";

import matches from "../../img/matches.png"
import league from "../../img/league.png"
import friends from "../../img/friends.png"


const css = {
  'marginTop': '50px',
  'textAlign': 'center',
  'backgroundColor': 'white'
}

const fontCss = {
  'fontFamily': 'Tahoma'
}

class MenuBar extends Component {
  render(props) {
    var options = {
      side: "left",
      effect: "diverge"
    };

    return (
      <Sidebar {...options}>
        <nav>
          <Link to="/" style={fontCss}>
            <img src={matches} width="150px" height="150px"/> Matches
          </Link>

          <a href="#" style={fontCss}>
            <img src={league} width="150px" height="150px"/> League
          </a>
          
          <Link to="/friends" style={fontCss}>
            <img src={friends} width="150px" height="150px"/> Friends
          </Link>
        </nav>
        <div style={css}>
          {this.props.children}
        </div>
      </Sidebar>
      
    );
  }
}
export default MenuBar;