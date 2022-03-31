import BannerActionTypes from './banner.types';

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: undefined,
  banner: []
}

const bannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BannerActionTypes.FETCH_BANNER_START: 
      return {
        ...state,
        isFetching: true
      }
    case BannerActionTypes.FETCH_BANNER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        banner: action.payload
      }
      case BannerActionTypes.FETCH_BANNER_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload
        };
    default:
      return state;
  }
};

export default bannerReducer;
