import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import bannerReducer from './banner/banner.reducer';
import productReducer from './product/product.reducer';
import categoryReducer from './category/category.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'banner']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  banner: bannerReducer,
  category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);
