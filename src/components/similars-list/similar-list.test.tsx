import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-route/history-route';
import SimilarList from './similars-list';


describe('Component: SimilarList', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SimilarList />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('similar-list')).toBeInTheDocument();
  });
});
