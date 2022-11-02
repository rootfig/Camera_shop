import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-route/history-route';

import Reviews from './reviews';

describe('Component: Reviews', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Reviews handleAddReviewButtonClick={function (): void {
            throw new Error('Function not implemented.');
          } } reviews={[]} onChangeReviewsListCount={function (count: number): void {
            throw new Error('Function not implemented.');
          } } reviewsListCount={0}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review')).toBeInTheDocument();
  });
});
