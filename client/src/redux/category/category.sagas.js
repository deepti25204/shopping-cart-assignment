import { takeLatest, put, all, call } from 'redux-saga/effects';

import CategoryActionTypes from './category.types';

import {
  fetchCategorySuccess,
  fetchCategoryFailure
} from './category.actions';

const fetchCategory = async () => {
  const response = await fetch(`http://localhost:5000/categories`);
  const data = await response.json();
  if(response.status >= 400) {
    throw new Error(data.errors);
  }
  return {categoryItems: data};
}

export function* fetchCategorysAsync() {
  try {
    const category = yield call(fetchCategory);
    yield put(fetchCategorySuccess(category));
  } catch(error) {
    yield put(fetchCategoryFailure(error));
  }
}

export function* fetchCategoryStart() {
  yield takeLatest(
    CategoryActionTypes.FETCH_CATEGORY_START,
    fetchCategorysAsync
  );
}

export function* categorySagas() {
  yield all([call(fetchCategoryStart)]);
}
