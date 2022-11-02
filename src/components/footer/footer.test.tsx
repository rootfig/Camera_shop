import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import Footer from './footer';

describe('Component: Footer', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Footer />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
