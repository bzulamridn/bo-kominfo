import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router';

export default class Master extends Component {
  render(){
    return (
      <div>
          <main>
              {this.props.children}
          </main>
      </div>
    )
  }
}
