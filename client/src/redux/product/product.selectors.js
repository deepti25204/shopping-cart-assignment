import { createSelector } from 'reselect';

const selectProduct = state => state.product;

export const selectCollections = createSelector(
  [selectProduct],
  product => product.collections
);

export const selectedCollection = categoryId =>
  createSelector(
    [selectCollections],
    collections => {
      if(categoryId)
        return (collections  && collections.length ? collections.filter(item=> item.category === categoryId) : null)
      else 
        return collections ? Object.keys(collections).map(key => collections[key]) : []
    }
  );

export const selectIsCollectionFetching = createSelector(
  [selectProduct],
  product => product.isFetching
);
