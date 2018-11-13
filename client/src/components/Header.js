import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container nav-wrapper">
          <div className="left brand-logo">Emaily</div>
          <ul id="nav-mobile" className="right">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
