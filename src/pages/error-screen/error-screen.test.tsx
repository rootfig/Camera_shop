import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../mocks/mock-store';
import ErrorScreen from './error-screen';


describe('Сorrectly render ErrorScreen', () => {
  it('Render component', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ErrorScreen />
        </Provider>
      </HistoryRouter>,
    );
    const titleElement = screen.getByTestId('error-screen');
    expect(titleElement).toBeInTheDocument();
  });
});
