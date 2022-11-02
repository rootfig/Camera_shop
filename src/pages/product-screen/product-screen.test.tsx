import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../mocks/mock-store';
import ProductScreen from './product-screen';


describe('Сorrectly render ProductScreen', () => {
  it('Render component', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ProductScreen />
        </Provider>
      </HistoryRouter>,
    );
    const titleElement = screen.getByTestId('product-screen');
    expect(titleElement).toBeInTheDocument();
  });
});
