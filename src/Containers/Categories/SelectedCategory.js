import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default function SelectedCategory() {
  const { name } = useParams();
  let productId = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => {
        console.log("res nga selected category", res.data);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <div>
      <label
        style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Showing products from <span style={{ color: "red" }}> {name} </span>
        category...
      </label>
      <span style={{ textAlign: "center" }}>
        {isLoading ? <LoadingSpinner /> : null}
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              style={{
                cursor: "pointer",
                border: "2px solid rgba(0, 0, 0, 0.05)",
              }}
              onClick={() => {
                productId(`/products/${product.id}`);
              }}
            >
              <img alt='' src={product.image} style={{ height: "100px" }}></img>
              <p>Product id: {product.id}</p>
              <p>Product title: {product.title}</p>
              <p>Product description: {product.description}</p>
            </div>
          ))}
      </span>
    </div>
  );
}
