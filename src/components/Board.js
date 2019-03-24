import React, { Component } from 'react'
import Raw from './Raw'

class Board extends Component {

  render() {
    return (
      <div className = 'Board'>
        <Raw arr = {['A/C', '+/-', '%', '/']} cls = 'raw1' handleClick = {this.props.handleClick}/>
        <Raw arr = {['7', '8', '9', '*']} cls = 'raw2' handleClick = {this.props.handleClick}/>
        <Raw arr = {['4', '5', '6', '-']} cls = 'raw3' handleClick = {this.props.handleClick}/>
        <Raw arr = {['1', '2', '3', '+']} cls = 'raw4' handleClick = {this.props.handleClick}/>
        <Raw arr = {[' ', '0', '.', '=']} cls = 'raw5' handleClick = {this.props.handleClick}/>
      </div>
    )
  }
}

export default Board