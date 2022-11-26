import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import Pagination from './pagination';

describe('Component: CatalogSort', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pagination currentPage={0} setActivePage={function (_arg: number): void {
            throw new Error('Function not implemented.');
          } } totalPages={0}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
