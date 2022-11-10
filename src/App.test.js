import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
