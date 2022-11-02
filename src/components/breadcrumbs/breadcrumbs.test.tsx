import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import Breadcrumbs from './breadcrumbs';

describe('Component: Breadcrumbs', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Breadcrumbs />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
