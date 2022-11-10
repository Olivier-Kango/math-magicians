import React, { useState } from 'react';
import calculate from '../logic/calculate';

const h3 = {
  margin: '40px 0',
};

const container = {
  display: 'flex',
  justifyContent: 'space-between',
};

const Calculator = () => {
  const stateElement = {
    total: 0,
    next: null,
    operation: null,
  };

  const [items, setitems] = useState(stateElement);

  const handleClick = (e) => {
    const elt = e.target.innerText;
    const newitems = { ...items };
    setitems(calculate(newitems, elt));
  };

  return (
    <div style={container} className="container-calculator">
      <h3 style={h3}>Let do some Maths!</h3>
      <div className="container">
        <div className="result">{items.next || items.operation || items.total || 0}</div>
        <button type="button" className="left" onClick={handleClick}>AC</button>
        <button type="button" className="left" onClick={handleClick}>+/-</button>
        <button type="button" className="left" onClick={handleClick}>%</button>
        <button type="button" className="right" onClick={handleClick}>÷</button>
        <button type="button" className="left" onClick={handleClick}>7</button>
        <button type="button" className="left" onClick={handleClick}>8</button>
        <button type="button" className="left" onClick={handleClick}>9</button>
        <button type="button" className="right" onClick={handleClick}>x</button>
        <button type="button" className="left" onClick={handleClick}>4</button>
        <button type="button" className="left" onClick={handleClick}>5</button>
        <button type="button" className="left" onClick={handleClick}>6</button>
        <button type="button" className="right" onClick={handleClick}>-</button>
        <button type="button" className="left" onClick={handleClick}>1</button>
        <button type="button" className="left" onClick={handleClick}>2</button>
        <button type="button" className="left" onClick={handleClick}>3</button>
        <button type="button" className="right" onClick={handleClick}>+</button>
        <button type="button" className="zero" onClick={handleClick}>0</button>
        <button type="button" className="left" onClick={handleClick}>.</button>
        <button type="button" className="right" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
