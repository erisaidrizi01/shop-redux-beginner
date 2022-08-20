import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./Categories.actions";

import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default function Categories() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.data);
  console.log("categories", categories);
  const loading = useSelector((state) => state.categories.loading);
  console.log("loading", loading);

  return (
    <div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "25px",
        }}
      >
        Pick a product category:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
        }}
      >
        {loading ? <LoadingSpinner /> : null}
        {categories &&
          categories.map((category) => (
            <div
              key={category}
              style={{
                border: "1px solid rgba(0, 0, 0, 2)",
                height: "100px",
                width: "22%",
                backgroundColor: "#EDE0D6",
                cursor: "pointer",
                justifyContent: "center",
                textAlign: "center",
                lineHeight: "100px",
              }}
              onClick={() => {
                navigate(`/category/${category}`);
              }}
            >
              {category}
            </div>
          ))}
      </div>
    </div>
  );
}
