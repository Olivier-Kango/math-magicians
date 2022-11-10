import { render, screen } from '@testing-library/react';
import React from 'react';
import Calculator from '../Calculator';

describe('<Calculator />', () => {
  it('shows numbers', () => {
    render(<Calculator />);
       
    const buttons = document.getElementsByClassName('left');

    Array.from(buttons).forEach((n) => {
      expect(screen.getByText(n.innerHTML.toString())).toBeInTheDocument();
    });
  });
});
