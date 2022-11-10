import { render, screen } from '@testing-library/react';
import Quote from '../Quote';

describe('Testing the Quote page:', () => {
  test('should render', () => {
    render(<Quote />);
    const textElement = screen.getByText(/Mathematics is not about numbers/i);
    expect(textElement).toMatchSnapshot();
  });
});
