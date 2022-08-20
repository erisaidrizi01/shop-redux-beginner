// import Product from "./Product";
import { actionTypes } from "./Products.actions";

export const products = (
  state = {
    loading: true,
    data: [],
    error: null,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.PRODUCTS_LOADING:
      return { ...state, loading: true };
    case actionTypes.PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: payload };
    case actionTypes.PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
