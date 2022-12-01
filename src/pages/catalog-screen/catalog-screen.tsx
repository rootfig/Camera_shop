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
import { PRODUCTS_COUNT, QueryParams, SearchParams, SortOrder, SortType } from '../../constants';
import Loader from '../../components/loader/loader';

function CatalogScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [searchParams] = useSearchParams();

  const productsTotalCount = useAppSelector(selectProductsTotalCount);
  const isCamerasLoaded = useAppSelector(selectIsCamerasLoaded);
  const [activePage, setActivePage] = useState(Number(id));

  useEffect(() => {
    dispatch(fetchPriceCamerasAction({
      [QueryParams.Sort]: SortType.Price,
      [QueryParams.Order]: SortOrder.Asc,
      [QueryParams.Category]: searchParams.getAll(SearchParams.Category),
      [QueryParams.Type]: searchParams.getAll(SearchParams.Type),
      [QueryParams.Level]: searchParams.getAll(SearchParams.Level),
    }));
  }, [dispatch, searchParams, id]);
  const cameras = useAppSelector(selectCameras);
  useEffect(() => {
    dispatch(fetchCamerasByParamsAction({
      [QueryParams.Limit]: PRODUCTS_COUNT,
      [QueryParams.Page]: Number(id),
      [QueryParams.Sort]: searchParams.get(SearchParams.Sort),
      [QueryParams.Order]: searchParams.get(SearchParams.Order),
      [QueryParams.Category]: searchParams.getAll(SearchParams.Category),
      [QueryParams.Type]: searchParams.getAll(SearchParams.Type),
      [QueryParams.Level]: searchParams.getAll(SearchParams.Level),
      [QueryParams.PriceMin]: searchParams.get(SearchParams.PriceMin),
      [QueryParams.PriceMax]: searchParams.get(SearchParams.PriceMax),
    }));
  },[dispatch, activePage, id, searchParams, cameras.length]);

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
