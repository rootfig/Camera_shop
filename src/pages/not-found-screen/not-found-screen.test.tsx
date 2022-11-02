import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../mocks/mock-store';
import NotFoundScreen from './not-found-screen';


describe('Сorrectly render NotFoundScreen', () => {
  it('Render component', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <NotFoundScreen />
        </Provider>
      </HistoryRouter>,
    );
    const titleElement = screen.getByTestId('not-found-screen');
    expect(titleElement).toBeInTheDocument();
  });
});
