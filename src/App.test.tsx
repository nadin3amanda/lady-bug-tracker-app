import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('it should render the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lady Bug Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('creates a new bug', () => {
  render(<App />);
  const inputElement = screen.getByTestId('newBugDescription');
  userEvent.type(inputElement, 'bug testing 123');
  fireEvent.click(screen.getByTestId('add-button'));

});
