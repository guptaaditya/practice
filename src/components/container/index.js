import React, { Component } from 'react'

export default class Container extends Component {
  render(){
    return (
      <div className="container appContainer">
        {this.props.children}
      </div>
    )
  }
};
