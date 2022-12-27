import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectOrdersInBasket } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';
import CatalogItem from '../catalog-item/catalog-item';

type CatalogListProps = {
  cameras: Camera[];
}

function CatalogList( {cameras}: CatalogListProps ): JSX.Element {
  const orders = useAppSelector(selectOrdersInBasket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (orders) {
      const result = JSON.stringify(orders);
      localStorage.setItem('order', result);
    }
  },[dispatch, orders]);

  return (
    <div className="cards catalog__cards" data-testid='catalog__cards'>
      {
        cameras.map((camera) => {
          const isCameraInBasket = orders.some((order) => camera.id === order.camera.id);
          return (
            <CatalogItem
              key={camera.id}
              camera={camera}
              isCameraInBasket={isCameraInBasket}
            />
          );
        }
        )
      };

    </div>
  );
}

export default CatalogList;
