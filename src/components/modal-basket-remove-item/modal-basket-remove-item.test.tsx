import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import { Camera } from '../../types/camera';
import HistoryRouter from '../history-router/history-router';
import ModalBasketRemoveItem from './modal-basket-remove-item';

describe('Component: Footer', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ModalBasketRemoveItem isRemoveItemStatus={false} removedItem={{
            id: 0,
            name: '',
            vendorCode: '',
            type: '',
            category: '',
            description: '',
            level: '',
            rating: 0,
            price: 0,
            previewImg: '',
            previewImg2x: '',
            previewImgWebp: '',
            previewImgWebp2x: '',
            reviewCount: 0
          }} handleRemoveButtonClick={function (order: Camera): void {
            throw new Error('Function not implemented.');
          } }
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('basket-remove-item')).toBeInTheDocument();
  });
});
