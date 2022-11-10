import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';


test('renders learn react link', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
