import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-route/history-route';
import MoreReviewButton from './more-review-button';

describe('Component: MoreReviewButton', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MoreReviewButton onChangeReviewsListCount={function (count: number): void {
            throw new Error('Function not implemented.');
          } } reviewsListCount={0}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('more-review-button')).toBeInTheDocument();
  });
});
