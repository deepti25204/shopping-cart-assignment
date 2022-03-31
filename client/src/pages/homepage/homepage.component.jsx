import React, { lazy, Suspense } from 'react';
import { HomePageContainer } from './homepage.styles';
import Spinner from '../../components/spinner/spinner.component';
const Banner = lazy(() => import("../../components/banner/banner.component"));
const Category = lazy(() =>  import("../../components/category/category.component"));


const HomePage = () => (
  <HomePageContainer>
    <Suspense fallback={<Spinner />}>
      <Banner />
      <Category />
    </Suspense>
  </HomePageContainer>
);

export default HomePage;
