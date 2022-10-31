import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-route/history-route';
import CatalogSort from './catalog-sort';

describe('Component: CatalogSort', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CatalogSort />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('catalog-sort')).toBeInTheDocument();
  });
});
