import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import GetInvolved from './GetInvolved';

test('renders Home Page Banner', () => {
  const history = createMemoryHistory();
  history.push('/');

  const { getByText } = render(
    <Router history={history}>
      <GetInvolved />
    </Router>
  );

  expect(getByText(/Delayed justice is injustice/i)).toBeInTheDocument();
});
