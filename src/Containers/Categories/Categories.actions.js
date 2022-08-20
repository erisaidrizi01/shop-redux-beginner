// export const setCategories = (categories) => {
//   return {
//     type: "SET_CATEGORIES",
//     payload: categories,
//   };
// };

import axios from "axios";
import { endpoints } from "../../Config";

export const actionTypes = {
  CATEGORIES_LOADING: "CATEGORIES_LOADING",
  CATEGORIES_SUCCESS: "CATEGORIES_SUCCESS",
  CATEGORIES_ERROR: "CATEGORIES_ERROR",
};

export const getCategories = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CATEGORIES_LOADING,
    });

    axios
      .get(endpoints.categories)

      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: actionTypes.CATEGORIES_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.CATEGORIES_ERROR,
          payload: err,
        });
      });
  };
};
