import React from 'react';

const h3 = {
  margin: '25vh 0',
  textAlign: 'center',
  color: '#00004B',
};

const Quote = () => (
  <div>
    <h3 style={h3} className="h-quote">
      Mathematics is not about numbers, equations, computations, or algorithms:
      <br />
      It is about understanding.
      <br />
      <br />
      <i>William Paul Thurston</i>
    </h3>
  </div>
);

export default Quote;
