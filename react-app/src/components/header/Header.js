// src/components/header/Header.js
 
import React, {Component} from 'react';
import './Header.scss';
 
export default class Header extends Component {
 
  render() {
      return (
      <header className="Header">
          <div className="Header-wrapper">
              <h1 className="Header-title">SKYDEVOPS<span className="Header-title--inverse">_</span></h1>
          </div>
        </header>
      );
  }
}