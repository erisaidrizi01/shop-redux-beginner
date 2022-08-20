// import Product from "./Product";
import { actionTypes } from "./Product.actions";

export const product = (
  state = {
    loading: true,
    data: {},
    error: null,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.PRODUCT_LOADING:
      return { ...state, loading: true };
    case actionTypes.PRODUCT_SUCCESS:
      return { ...state, loading: false, data: payload };
    case actionTypes.PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
