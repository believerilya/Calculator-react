import React, { Component } from 'react'
import Board from './Board'
import Window from './Window'

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num: '',
      fn: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.calculator = this.calculator.bind(this);
  }
  handleClick(value) {
    this.calculator(value)
  }

  calculator(val) {
    let newnum = this.state.num;
    let newfn = this.state.fn;

    if (['1','2','3','4','5','6','7','8','9','0','.'].includes(val)) {
      newnum += val;
      this.setState({
        num: newnum, 
        fn: newfn    
      })
      return;
    } 

    switch(val) {
      case '+' : {
        this.setState({
          num: '',
          fn: plus.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '-' : {
        this.setState({
          num: '',
          fn: minus.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '*' : {
        this.setState({
          num: '',
          fn: multiply.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '/' : {
        this.setState({
          num: '',
          fn: divide.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '%' : {
        
        this.setState({
          num: percent(JSON.parse(newnum)),
          fn: null
        })
        break;
      }

      case 'A/C' : {
        this.setState({
          num: '',
          fn: null
        })
        break;
      }

      case '+/-' : {
          if (newnum.includes('-')) {
            newnum = newnum.slice(1);
          } else {
            newnum = '-' + newnum;
          }
          this.setState({
            num: newnum,
            fn: null
          })
        break;
      }

      case '=' : {
        if (newfn) {
        const result = newfn(JSON.parse(newnum)).toString();
        this.setState({
          num: result,
          fn: null
        })
        }
        break;
      }

      case ' ' : {

        break;
      }

      default : {
        break;
      }
    }
  }

  render() {
    return (
      <div>
       <Window value = {this.state.num}/>
       <Board handleClick = {this.handleClick}/>
      </div>
      )
  }
}

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const divide = (a, b) => a/b;
const multiply = (a, b) => a * b;
const percent = (a) => a/100;
export default Calculator
