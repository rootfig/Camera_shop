import { Camera } from '../../types/camera';
import CatalogItem from '../catalog-item/catalog-item';

type CatalogListProps = {
  cameras: Camera[];
}

function CatalogList( {cameras}: CatalogListProps ): JSX.Element {

  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) =>
        (
          <CatalogItem
            key={camera.id}
            camera={camera}
          />))}
    </div>
  );
}

export default CatalogList;
