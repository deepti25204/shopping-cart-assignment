import { all, call } from 'redux-saga/effects';

import { productSagas } from './product/product.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { bannerSagas } from './banner/banner.sagas';
import { categorySagas } from './category/category.sagas';

export default function* rootSaga() {
  yield all([call(productSagas), call(userSagas), call(cartSagas), call(bannerSagas), call(categorySagas)]);
}
