import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elem = screen.getByText(/Taskbox/i);
  expect(elem).toBeInTheDocument();
});
