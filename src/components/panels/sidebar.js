import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from "reactrix-sidebar";
import "reactrix-sidebar/index.css";

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
          <a href="#" style={fontCss}>Link 1</a>
          <a href="#" style={fontCss}>Link 2</a>
          <a href="#" style={fontCss}>Link 3</a>
        </nav>
        <div style={css}>
          {this.props.children}
        </div>
      </Sidebar>
      
    );
  }
}
export default MenuBar;