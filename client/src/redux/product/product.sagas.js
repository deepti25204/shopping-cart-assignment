import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './product.actions';


import ProductActionTypes from './product.types';

const fetchProduct = async () => {
  const response = await fetch(`http://localhost:5000/products/`);
  const data = await response.json();
  if(response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
}

export function* fetchCollectionsAsync() {
  try {    
    const productsList = yield call(fetchProduct);
    yield put(fetchCollectionsSuccess(productsList));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ProductActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* productSagas() {
  yield all([call(fetchCollectionsStart)]);
}
