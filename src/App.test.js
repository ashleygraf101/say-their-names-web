import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

test('renders Home Page', () => {
  const history = createMemoryHistory();
  history.push('/');

  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByText(/Delayed justice is injustice/i)).toBeInTheDocument();
});


test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(container.innerHTML).toHaveTextContent('Not all those who wander are lost, but it seems you may have taken a wrong turn.');
});
