import axios from "axios";
import { endpoints } from "../../Config";

export const actionTypes = {
  PRODUCT_LOADING: "PRODUCT_LOADING",
  PRODUCT_SUCCESS: "PRODUCT_SUCCESS",
  PRODUCT_ERROR: "PRODUCT_ERROR",
};

export const getProduct = (productid) => {
  const id = productid;
  return (dispatch) => {
    dispatch({
      type: actionTypes.PRODUCT_LOADING,
    });
    // if (product === p1) {
    //   console.log("product i marre nga redux i products");
    //   // console.log(product);
    //   dispatch({
    //     type: actionTypes.PRODUCT_SUCCESS,
    //     payload: product,
    //   });
    // } else {
    //   console.log("product i marre nga API");

    axios
      .get(endpoints.products + `/${id}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: actionTypes.PRODUCT_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.PRODUCT_ERROR,
          payload: err,
        });
      });
  };
};
