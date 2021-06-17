import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
  
    super(props);
    this.state = { x: 0, y: 0, hidden: false };
  }
  
  move() {
    this.setState(state => ({
      x: state.x + 5,
      y: state.y + 10,
      hidden: true
    }));
    setTimeout(() => {
      this.setState(state => ({
        hidden: false
      }));
    }, 1000)
  }
  
  

  render() {
    return (
      <div style={{position: 'relative', height: 500}}>
        <div style={{
          position: 'absolute',
          visibility: this.state.hidden ? 'hidden' : 'visible',
          top: this.state.y,
          right: this.state.x,
          height: 100,
          width: 100,
          backgroundColor: 'yellow'
        }}
        onClick={() => {this.move( 
              )}}
        ></div>
      </div>
    );
  }
}

