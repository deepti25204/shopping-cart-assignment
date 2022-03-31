import ProductActionTypes from './product.types';

export const fetchCollectionsStart = () => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});
