import CategoryActionTypes from './category.types';

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: undefined,
  category: []
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_START: 
      return {
        ...state,
        isFetching: true
      }
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        category: action.payload
      }
      case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload
        };
    default:
      return state;
  }
};

export default categoryReducer;
