// Testing whether the 'learn react' link is rendered in the App component

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    // Rendering the App component

  render(<App />);
    // Checking if an element with the text 'learn react' is in the document

  const linkElement = screen.getByText(/learn react/i);
    // Expecting the link element to be in the document

  expect(linkElement).toBeInTheDocument();
});
