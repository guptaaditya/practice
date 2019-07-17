import React, { Component } from 'react'

export class Container extends Component {
  render(){
    return (
      <div className="container" style={containerStyles}>
        {this.props.children}
      </div>
    )
  }
};

const containerStyles = {
  width: "100%",
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

export default Container;
