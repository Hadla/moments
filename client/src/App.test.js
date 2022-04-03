import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Sidebar from './components/Sidebar';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test("Test open/close menu toggle", () => {
  const { element } = render(<Sidebar />)
  expect(element.getElementsByClassName('open'),'close' ).toBe(false);
});
