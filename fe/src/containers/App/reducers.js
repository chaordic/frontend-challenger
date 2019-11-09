import C from './constants';

const initialState = {
  order: undefined,
  isLoading: true,
  id: '',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        order: undefined,
      };

    case C.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: action.data || undefined,
      };

    case C.FETCH_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case C.TOGGLE_SHIP:
      return {
        ...state,
        open: !state.open,
      };

    default:
      return state || initialState;
  }
};

export default appReducer;
