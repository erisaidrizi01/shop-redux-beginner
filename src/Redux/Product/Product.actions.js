import axios from "axios";
import { endpoints } from "../../Config";

export const actionTypes = {
  PRODUCT_LOADING: "PRODUCT_LOADING",
  PRODUCT_SUCCESS: "PRODUCT_SUCCESS",
  PRODUCT_ERROR: "PRODUCT_ERROR",
};

export const getProduct = (productid) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PRODUCT_LOADING,
    });

    axios
      .get(endpoints.products + `/${productid}`)

      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: actionTypes.PRODUCT_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.PRODUCT_SUCCESS,
          payload: err,
        });
      });
  };
};
