import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import CatalogList from '../../components/catalog-list/catalog-list';
import Pagination from '../../components/pagination/pagination';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectProductsTotalCount, selectCameras, selectIsCamerasLoaded } from '../../store/cameras-slice/selectorts';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchCamerasByParamsAction, fetchPriceCamerasAction } from '../../store/api-actions';
import { PRODUCTS_COUNT, QueryParams, SortOrder, SortType } from '../../constants';
import Loader from '../../components/loader/loader';

function CatalogScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [searchParams] = useSearchParams();
  const cameras = useAppSelector(selectCameras);
  const productsTotalCount = useAppSelector(selectProductsTotalCount);
  const isCamerasLoaded = useAppSelector(selectIsCamerasLoaded);
  const [activePage, setActivePage] = useState(Number(id));

  useEffect(() => {
    dispatch(fetchPriceCamerasAction({
      [QueryParams.Sort]: SortType.Price,
      [QueryParams.Order]: SortOrder.Asc,
      [QueryParams.Category]: searchParams.get(QueryParams.Category),
      [QueryParams.Type]: searchParams.get(QueryParams.Type),
      [QueryParams.Level]: searchParams.get(QueryParams.Level)
    }));
  }, [dispatch, searchParams, id]);

  useEffect(() => {
    dispatch(fetchCamerasByParamsAction({
      [QueryParams.Limit]: PRODUCTS_COUNT,
      [QueryParams.Page]: Number(id),
      [QueryParams.Sort]: searchParams.get(QueryParams.Sort),
      [QueryParams.Order]: searchParams.get(QueryParams.Order),
      [QueryParams.Category]: searchParams.get(QueryParams.Category),
      [QueryParams.Type]: searchParams.get(QueryParams.Type),
      [QueryParams.Level]: searchParams.get(QueryParams.Level),
      [QueryParams.PriceMin]: searchParams.get(QueryParams.PriceMin),
      [QueryParams.PriceMax]: searchParams.get(QueryParams.PriceMax),
    }));
  },[dispatch, activePage, id, searchParams]);

  const totalPages = useMemo(() => (
    Math.ceil(productsTotalCount / PRODUCTS_COUNT)
  ), [productsTotalCount]);

  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>Каталог - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>

        <Header />

        <main>

          <Banner />

          <div className="page-content">

            <Breadcrumbs />

            <section className="catalog">
              <div className="container">
                <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                <div className="page-content__columns">

                  <CatalogFilter />
                  {isCamerasLoaded ? <Loader /> :
                    <div className="catalog__content">

                      <CatalogSort />

                      <CatalogList cameras={cameras} />

                      <Pagination
                        currentPage={Number(id)}
                        setActivePage={setActivePage}
                        totalPages={totalPages}
                      />

                    </div>}
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />

      </div>
    </HelmetProvider>
  );
}

export default CatalogScreen;
