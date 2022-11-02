import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-router/history-router';

import ReviewItem from './review-item';

describe('Component: ReviewItem', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewItem item={{
            id: 0,
            userName: '',
            advantage: '',
            disadvantage: '',
            review: '',
            rating: 0,
            createAt: '',
            cameraId: 0
          }}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-item')).toBeInTheDocument();
  });
});
