import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { number: 0 };
  }

  handleClick(e) {
    this.setState({
      number: e.target.innerText,
    });
  }

  // handleTextChange(newText) {
  //   this.setState({text: newText});
  // }

  render() {
    const { number } = this.state;
    return (
      <div>
        <button type="button" className="result">{number}</button>
        <button type="button" className="left">AC</button>
        <button type="button" className="left">+/-</button>
        <button type="button" className="left">%</button>
        <button type="button" className="right">÷</button>
        <button type="button" className="left">7</button>
        <button type="button" className="left">8</button>
        <button type="button" className="left">9</button>
        <button type="button" className="right">x</button>
        <button type="button" className="left">4</button>
        <button type="button" className="left">5</button>
        <button type="button" className="left">6</button>
        <button type="button" className="right">-</button>
        <button type="button" className="left" onClick={this.handleClick}>1</button>
        <button type="button" className="left">2</button>
        <button type="button" className="left">3</button>
        <button type="button" className="right">+</button>
        <button type="button" className="zero">0</button>
        <button type="button" className="left">.</button>
        <button type="button" className="right">=</button>
      </div>
    );
  }
}

export default Calculator;
