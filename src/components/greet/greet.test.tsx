import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');

    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');

    expect(textElement).toBeInTheDocument();
  });
});