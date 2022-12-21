import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import ModalCatalogAddItemSuccess from './modal-catalog-add-item-success';

describe('Component: ModalCatalogAddItemSuccess', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ModalCatalogAddItemSuccess isAddSuccessItemStatus={false} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('modal-catalog-add-item-success')).toBeInTheDocument();
  });
});
