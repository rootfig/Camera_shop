import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import { makeFakeCamera } from '../../mocks/moks';
import HistoryRouter from '../history-router/history-router';
import CatalogItem from './catalog-item';

describe('Component: CatalogItem', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CatalogItem camera={makeFakeCamera()} isCameraInBasket/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
