import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick = {() => this.props.handleClick(this.props.val)}> {this.props.val} </button>
      </div>
    )
  }
}

export default Button
