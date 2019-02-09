import React, { Component } from 'react';
import Button from './Button'

class Desk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            fn: null
        }
        this.calculate = this.calculate.bind(this);
    }

    renderBut(val) {
        return <Button value = {val} handleClick = {this.calculate}/>
    }

    calculate(el) {
        let newNum = this.state.num1;
        let newFn = this.state.fn;
        if (['1','2','3','4','5','6','7','8','9','0','.'].includes(el)) {
            newNum = newNum += el;
            this.setState({num1 : newNum , fn: newFn, result : false});
        }

        // eslint-disable-next-line default-case
        switch(el) {
            case '+' : {
                this.setState({num1: '', fn: this.plus.bind(null, JSON.parse(newNum))});
                break;
            }
            case '-' : {
                this.setState({num1: '', fn: this.minus.bind(null, JSON.parse(newNum))});
                break;
            }
            case '*' : {
                this.setState({num1: '', fn: this.multip.bind(null, JSON.parse(newNum))});
                break;
            }
            case '/' : {
                this.setState({num1: '', fn: this.divide.bind(null, JSON.parse(newNum))});
                break;
            }
            case '%' : {
                this.setState({
                    num1: this.per(JSON.parse(newNum)),
                    fn: null}
                )     
                 break;
            }
            case '+/-' : {
                newNum.includes('-') ? newNum = newNum.slice(1) : newNum = '-' + newNum;
                this.setState({num1:  newNum, fn: newFn});
                break;
            }
            case 'A/C' : {
                this.setState({num1: '' , fn: null});
                break;
            }
            case '=' : {
                const res = newFn(JSON.parse(newNum)).toString();
                this.setState({num1 : res, fn: null});
            }
        }
    };

    plus(a, b) {
            return a  + b;
        }

    minus(a,b) {
        return a - b;
    }

    multip(a,b) {
        return a*b;
    }

    divide(a, b) {
        return a/b;
    }

    per(a) {
        return a/100;
    }

    render() {

        return (
            <div className = 'Desk'>
                <div className = 'output'>
                    <h1>{this.state.num1}</h1>
                </div>
                <div className = 'raw'>
                    {this.renderBut('A/C')} {this.renderBut('+/-')} {this.renderBut('%')} {this.renderBut('/')}
                </div>
                <div className = 'raw'>
                    {this.renderBut('7')} {this.renderBut('8')} {this.renderBut('9')} {this.renderBut('*')}
                </div>
                <div className = 'raw'>
                    {this.renderBut('4')} {this.renderBut('5')} {this.renderBut('6')} {this.renderBut('-')}
                </div>
                <div className = 'raw'>
                    {this.renderBut('1')} {this.renderBut('2')} {this.renderBut('3')} {this.renderBut('+')}
                </div>
                <div className = 'raw4'>
                    {this.renderBut('0')} {this.renderBut('.')} {this.renderBut('=')}
                </div>
            </div>
        );
    }
}

export default Desk;