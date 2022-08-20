import React, { useEffect, useState } from "react";
import "./Products.css";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Products.actions";
import { ProductItem } from "./ProductItem";

export default function Products() {
  const dispatch = useDispatch();

  const styleObj = {
    fontSize: 16,
    color: "#4a54f1",
    paddingTop: "100px",
    fontWeight: "bold",
    fontFamily: "Arial",
  };

  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    // .get(`https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`)
    dispatch(getProducts(limit, sort));
  }, [limit, sort, dispatch]);

  const products = useSelector((state) => state.products.data);
  console.log("products ketuuu", products);
  const loading = useSelector((state) => state.products.loading);
  console.log("loading", loading);

  return (
    <div>
      <div className='header'>
        <span>
          <label style={styleObj}>Choose number of products:</label>
          <select
            name='no-products'
            id='no-products'
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option defaultValue='20'>20</option>
          </select>
        </span>
        <span>
          <label htmlFor='sort' style={styleObj}>
            Choose sort:
          </label>
          <select
            name='sort'
            id='sort'
            onChange={(e) => setSort(e.target.value)}
          >
            <option value='asc'>asc</option>
            <option value='desc'>desc</option>
          </select>
        </span>
        <span>
          <button style={{ marginLeft: "30px" }}>
            <Link to='/category'>GO TO ALL CATEGORIES PAGE</Link>
          </button>
        </span>
      </div>
      {loading ? <LoadingSpinner /> : null}
      <span className='container'>
        {products &&
          products.map((product, key) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </span>
    </div>
  );
}
