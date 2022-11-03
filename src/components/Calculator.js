import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick(e) {
    const elt = e.target.innerText;
    this.setState((el) => calculate(el, elt));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <button type="button" className="result" onClick={this.handleClick}>{next || operation || total || 0}</button>
        <button type="button" className="left" onClick={this.handleClick}>AC</button>
        <button type="button" className="left" onClick={this.handleClick}>+/-</button>
        <button type="button" className="left" onClick={this.handleClick}>%</button>
        <button type="button" className="right" onClick={this.handleClick}>÷</button>
        <button type="button" className="left" onClick={this.handleClick}>7</button>
        <button type="button" className="left" onClick={this.handleClick}>8</button>
        <button type="button" className="left" onClick={this.handleClick}>9</button>
        <button type="button" className="right" onClick={this.handleClick}>x</button>
        <button type="button" className="left" onClick={this.handleClick}>4</button>
        <button type="button" className="left" onClick={this.handleClick}>5</button>
        <button type="button" className="left" onClick={this.handleClick}>6</button>
        <button type="button" className="right" onClick={this.handleClick}>-</button>
        <button type="button" className="left" onClick={this.handleClick}>1</button>
        <button type="button" className="left" onClick={this.handleClick}>2</button>
        <button type="button" className="left" onClick={this.handleClick}>3</button>
        <button type="button" className="right" onClick={this.handleClick}>+</button>
        <button type="button" className="zero" onClick={this.handleClick}>0</button>
        <button type="button" className="left" onClick={this.handleClick}>.</button>
        <button type="button" className="right" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
