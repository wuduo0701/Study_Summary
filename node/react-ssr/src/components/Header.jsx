import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <button onClick={this.handleClick}>header</button>
    )
  }
  handleClick() {
    console.log('click')
  }
}

export default Header