import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store';
import HistoryRouter from '../history-router/history-router';
import BasketSummary from './basket-summary';

describe('Component: BasketSummary', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BasketSummary orders={[]} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('basket-summary')).toBeInTheDocument();
  });
});
