import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBannerItems } from '../../redux/banner/banner.selectors';
import { fetchBannerStart } from '../../redux/banner/banner.actions';

import Slider from  '../slider/slider.component';
import Spinner from '../../components/spinner/spinner.component';

const Banner = ({fetchBannerStart, bannerItems}) => {
  useEffect(() => {
    fetchBannerStart();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Slider data={bannerItems} />
    </Suspense>
  );
};

const mapStateToProps = createStructuredSelector({
  bannerItems: selectBannerItems
});

const mapDispatchToProps = dispatch => ({
  fetchBannerStart: () => dispatch(fetchBannerStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);

