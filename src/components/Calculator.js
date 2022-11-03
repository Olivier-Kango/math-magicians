import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <ul>
          <li className="result">0</li>
          <li className="left">AC</li>
          <li className="left">+/-</li>
          <li className="left">%</li>
          <li className="right">÷</li>
          <li className="left">7</li>
          <li className="left">8</li>
          <li className="left">9</li>
          <li className="right">x</li>
          <li className="left">4</li>
          <li className="left">5</li>
          <li className="left">6</li>
          <li className="right">-</li>
          <li className="left">1</li>
          <li className="left">2</li>
          <li className="left">3</li>
          <li className="right">+</li>
          <li className="zero">0</li>
          <li className="left">.</li>
          <li className="right">=</li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
