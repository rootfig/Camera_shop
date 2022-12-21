import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import ModalBasketSuccess from './modal-basket-success';

describe('Component: ModalBasketSuccess', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ModalBasketSuccess />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('modal-basket-success')).toBeInTheDocument();
  });
});
