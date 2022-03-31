import { takeLatest, put, all, call } from 'redux-saga/effects';

import BannerActionTypes from './banner.types';

import {
  fetchBannerSuccess,
  fetchBannerFailure
} from './banner.actions';

const fetchBanner = async () => {
  const response = await fetch(`http://localhost:5000/banners`);
  const data = await response.json();
  if(response.status >= 400) {
    throw new Error(data.errors);
  }
  return {bannerItems: data};
}

export function* fetchBannersAsync() {
  try {
    const banner = yield call(fetchBanner);
    yield put(fetchBannerSuccess(banner));
  } catch(error) {
    yield put(fetchBannerFailure(error));
  }
}

export function* fetchBannerStart() {
  yield takeLatest(
    BannerActionTypes.FETCH_BANNER_START,
    fetchBannersAsync
  );
}

export function* bannerSagas() {
  yield all([call(fetchBannerStart)]);
}
