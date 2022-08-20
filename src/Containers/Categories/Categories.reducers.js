// import Product from "./Product";
import { actionTypes } from "./Categories.actions";

export const categories = (
  state = {
    loading: true,
    data: [],
    error: null,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.CATEGORIES_LOADING:
      return { ...state, loading: true };
    case actionTypes.CATEGORIES_SUCCESS:
      return { ...state, loading: false, data: payload };
    case actionTypes.CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: "There was an error!",
      };

    default:
      return state;
  }
};
