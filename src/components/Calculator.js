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

    if (/\d/.test(val)) {
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
          fn: this.plus.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '-' : {
        this.setState({
          num: '',
          fn: this.minus.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '*' : {
        this.setState({
          num: '',
          fn: this.multiply.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '/' : {
        this.setState({
          num: '',
          fn: this.divide.bind(null, JSON.parse(newnum))
        })
        break;
      }

      case '%' : {
        
        this.setState({
          num: this.percent(JSON.parse(newnum)),
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
        alert('Subscribe on my github account');
        break;
      }

      default : {
        break;
      }
    }
  }

  plus = (a, b) => a + b;
  minus = (a, b) => a - b;
  divide = (a, b) => a/b;
  multiply = (a, b) => a * b;
  percent = (a) => a/100;

  render() {
    return (
      <div>
       <Window value = {this.state.num}/>
       <Board handleClick = {this.handleClick}/>
      </div>
      )
  }
}

export default Calculator
