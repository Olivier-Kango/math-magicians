import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Testing the Home page:', () => {
  test('should render', () => {
    render(<Home />);
    const textElement = screen.getByText(/Welcome to our page!/i);
  expect(textElement).toMatchSnapshot();
  });
});