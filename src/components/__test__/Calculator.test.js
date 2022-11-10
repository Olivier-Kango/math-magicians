import { render, screen } from '@testing-library/react';
import React from 'react';
import Calculator from '../Calculator';

describe('Testing Calculator component', () => {
  // Show button numbers
  it('shows numbers', () => {
    render(<Calculator />);

    const buttons = document.getElementsByClassName('left');

    Array.from(buttons).forEach((n) => {
      expect(screen.getByText(n.innerHTML.toString())).toMatchSnapshot();
    });
  });

  // Show calculator operators
  it('shows operators', () => {
    render(<Calculator />);

    const operators = document.getElementsByClassName('right');

    Array.from(operators).forEach((n) => {
      expect(screen.getByText(n.innerHTML.toString())).toMatchSnapshot();
    });
  });
});
