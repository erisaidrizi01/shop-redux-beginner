// export const setProducts = (products) => {
//   return {
//     type: "SET_PRODUCTS",
//     payload: products,
//   };
// };

import axios from "axios";
import { endpoints } from "../../Config";

export const actionTypes = {
  PRODUCTS_LOADING: "PRODUCTS_LOADING",
  PRODUCTS_SUCCESS: "PRODUCTS_SUCCESS",
  PRODUCTS_ERROR: "PRODUCTS_ERROR",
};

export const getProducts = (limit, sort) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PRODUCTS_LOADING,
    });

    axios
      .get(endpoints.products + `?limit=${limit}&sort=${sort}`)

      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: actionTypes.PRODUCTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.PRODUCTS_ERROR,
          payload: err,
        });
      });
  };
};
