import React, { Component } from 'react'

class Window extends Component {
  render() {
    return (
      <div className = 'window'>
        <h1>{this.props.value ? this.props.value : 'Enter numbers here'}</h1>
      </div>
    )
  }
}

export default Window
