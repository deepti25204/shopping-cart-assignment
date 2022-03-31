import { createSelector } from 'reselect';

const selectBanner = state => state.banner;

export const selectBannerItems = createSelector(
  [selectBanner],
  banner => (banner.banner || {}).bannerItems
);
