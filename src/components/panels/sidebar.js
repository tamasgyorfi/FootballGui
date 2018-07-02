import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import "reactrix-sidebar/index.css";

import matches from "../../img/matches.png"
import league from "../../img/league.png"
import friends from "../../img/friends.png"

import { NavBar, Nav, NavDropdown, NavItem, MenuItem, Navbar } from 'react-bootstrap';

class MenuBar extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      pic : ""
    }
  }

  componentDidMount() {
    window.FB.api('/me', function(response) {
      this.setState({
        name: response.name,
        pic : "http://graph.facebook.com/"+response.id+"/picture"
      }) 
    }.bind(this));
  }

  render(props) {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <img src={matches} width="25px" height="25px"/> <Link to="/">Matches</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <img src={league} width="25px" height="25px"/> League
            </NavItem>
            <NavItem eventKey={2} href="#">
              <img src={friends} width="25px" height="25px"/> <Link to ='/friends'>Friends</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
             <img src = {this.state.pic} alt="" style={{"marginRight": "100px"}}/>
          <Navbar.Brand>
            {this.state.name}
          </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MenuBar;