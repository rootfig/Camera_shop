import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../mocks/mock-store';
import BasketScreen from './basket-screen';

describe('Сorrectly render BasketScreen', () => {
  it('Render component', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <BasketScreen />
        </Provider>
      </HistoryRouter>,
    );
    expect(screen.getByTestId('basket-screen')).toBeInTheDocument();
  });
});
