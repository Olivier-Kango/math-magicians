import { render, screen } from '@testing-library/react';
import Quote from '../Quote';

describe('Testing the Home page:', () => {
  test('should render', () => {
    render(<Quote />);
    const textElement = screen.getByText(/Mathematics is not about numbers, equations, computations, or algorithms:/i);
    expect(textElement).toMatchSnapshot();
  });
});
