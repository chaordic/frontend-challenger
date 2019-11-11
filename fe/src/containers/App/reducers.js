import C from './constants';
import { formatAddress } from '../../utils';

const initialState = {
  order: {
    isLoading: true,
    id: undefined,
    status: undefined,
  },
  fulfillments: {
    isLoading: true,
    items: [],
    shipPlaces: [],
  },
  billingAddress: {
    isLoading: true,
  },
  payments: {
    isLoading: true,
  },
  totals: {
    isLoading: true,
  },
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

    case C.SET_FULFILLMENTS_SUCCESS:
      return {
        ...state,
        fulfillments: {
          ...state.fulfillments,
          isLoading: false,
          items: action.data || [],
        },
      };

    case C.SET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: {
          ...state.customer,
          isLoading: false,
          ...action.data,
        },
      };

    case C.SET_FULFILLMENTS_SHIPPLACES_SUCCESS:
      return {
        ...state,
        fulfillments: {
          ...state.fulfillments,
          shipPlaces: action.data || [],
        },
      };

    case C.SET_BILLINGADDRESS_SUCCESS:
      return {
        ...state,
        billingAddress: {
          isLoading: false,
          formattedAddress: formatAddress(action.data),
          ...action.data,
        },
      };

    case C.SET_ORDER_SUCCESS:
      return {
        ...state,
        order: {
          isLoading: false,
          id: action.data.id || '',
          status: action.data.status || '',
          pointOfSale: action.data.pointOfSale || '',
          createdAt: action.created || '',
        },
      };

    case C.SET_PAYMENT_SUCCESS:
      return {
        ...state,
        payments: {
          isLoading: false,
          items: action.data,
        },
      };

    case C.SET_TOTALS_SUCCESS:
      return {
        ...state,
        totals: {
          isLoading: false,
          ...action.data,
        },
      };

    case C.FETCH_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case C.TOGGLE_SHIP_TABLE:
      return {
        ...state,
        open: !state.open,
      };

    default:
      return state || initialState;
  }
};

export default appReducer;
