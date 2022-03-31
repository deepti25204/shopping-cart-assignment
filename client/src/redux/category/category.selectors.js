import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectCategoryItems = createSelector(
  [selectCategory],
  category => (category.category || {}).categoryItems
);
