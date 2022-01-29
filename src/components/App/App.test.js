import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders Quiz Manager link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Access Quiz Manager/i);
  expect(linkElement).toBeInTheDocument();
});

test('Click Accesses Quiz Manager link', () => {
  render(<App />);

  userEvent.click(screen.getByText('Access Quiz Manager'))

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();

})