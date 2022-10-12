
import { useAppSelector } from '../../hooks';
import { selectCamera } from '../../store/camera-slice/selectors';
import TabMenu from '../tab-menu/tab-menu';

function ProductCard(): JSX.Element {

  const camera = useAppSelector(selectCamera);
  const { name, rating, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, reviewCount } = camera;

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source
                type="image/webp"
                srcSet={`../${ previewImgWebp }, ../${ previewImgWebp2x }`}
              />
              <img
                src={ `../${previewImg}` }
                srcSet={ `../${previewImg2x}` }
                width="560"
                height="480"
                alt={ name }
              />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{ name }</h1>
            <div className="rate product__rate">
              <svg width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <p className="visually-hidden">Рейтинг: { rating }</p>
              <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{ reviewCount }</p>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{ price } ₽</p>
            <button className="btn btn--purple" type="button">
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
            <TabMenu camera={camera} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
