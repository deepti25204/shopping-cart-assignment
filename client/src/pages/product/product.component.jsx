import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/product/product.actions';
import { fetchCategoryStart } from '../../redux/category/category.actions';

import Spinner from '../../components/spinner/spinner.component';

import { ProductPageContainer } from './product.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const ProductPage = ({ fetchCollectionsStart, fetchCategoryStart }) => {

  useEffect(() => {
    fetchCategoryStart();
    fetchCollectionsStart();
  }, []);

  return (
    <ProductPageContainer>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            index
            element={<CollectionsOverviewContainer />}
          />
        </Routes>
      </Suspense>
    </ProductPageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCategoryStart: () => dispatch(fetchCategoryStart()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ProductPage);
