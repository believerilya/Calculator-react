import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
                <button className = 'Button' onClick = {() => this.props.handleClick(this.props.value)}>{this.props.value}</button>
        )
    }
}

export default Button