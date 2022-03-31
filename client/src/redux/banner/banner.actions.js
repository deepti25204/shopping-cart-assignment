import BannerActionTypes from './banner.types';

export const fetchBannerStart = () => ({
  type: BannerActionTypes.FETCH_BANNER_START
});

export const fetchBannerSuccess = banners => ({
  type: BannerActionTypes.FETCH_BANNER_SUCCESS,
  payload: banners
});

export const fetchBannerFailure = errorMessage => ({
  type: BannerActionTypes.FETCH_BANNER_FAILURE,
  payload: errorMessage
});