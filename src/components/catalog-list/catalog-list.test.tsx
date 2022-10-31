import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import { makeFakeCameras } from '../../mocks/moks';
import HistoryRouter from '../history-route/history-route';
import CatalogList from './catalog-list';

describe('Component: CatalogList', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CatalogList cameras={makeFakeCameras()}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('catalog__cards')).toBeInTheDocument();
  });
});
