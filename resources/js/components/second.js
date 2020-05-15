import React, { Component } from 'react';

export default class Second extends React.Component {
  render() {
    return (
      < div className="search" >
        <h1>Tes</h1>
        <header className="search-header">
          [Search Title]
      </header>
        <div className="search-results">
          {this.props.children}
        </div>
        <footer className="search-footer">
          [Total Results]
      </footer>
      </div >
    )
  }
}
