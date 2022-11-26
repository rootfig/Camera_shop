import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-router/history-router';
import CatalogFilterPrice from './catalog-filter-price';

describe('Component: CatalogFilterPrice', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CatalogFilterPrice />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('catalog-filter-price')).toBeInTheDocument();
  });
});
