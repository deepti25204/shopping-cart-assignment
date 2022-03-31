import CategoryActionTypes from './category.types';

export const fetchCategoryStart = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_START
});

export const fetchCategorySuccess = categories => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
  payload: categories
});

export const fetchCategoryFailure = errorMessage => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: errorMessage
});