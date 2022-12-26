import { useAppSelector } from '../../hooks';
import { selectOrdersInBasket } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';
import CatalogItem from '../catalog-item/catalog-item';

type CatalogListProps = {
  cameras: Camera[];
}

function CatalogList( {cameras}: CatalogListProps ): JSX.Element {
  const orders = useAppSelector(selectOrdersInBasket);
  return (
    <div className="cards catalog__cards" data-testid='catalog__cards'>
      {
        cameras.map((camera) => {
          const isCameraInBasket = orders ? orders.some((order) => camera.id === order.id) : false;
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
