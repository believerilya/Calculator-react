import React, { Component } from 'react'
import Button from './Button'

class Raw extends Component {

  renderBut(i) {
    return <Button val = {i} handleClick = {this.props.handleClick}/>
  }

  render() {
    return (
      <div className = {this.props.cls}>
        {this.props.arr.map(i => this.renderBut(i))}
      </div>
    )
  }
}

export default Raw
