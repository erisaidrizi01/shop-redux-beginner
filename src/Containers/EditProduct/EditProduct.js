import React from "react";
import {
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default function EditProduct() {
  let { productid } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const [categories, setCategories] = useState("");

  const url = `https://fakestoreapi.com/products/categories`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCategories(res.data);
        console.log("res nga categories", res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  //   const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .then((res) => {
        console.log("res nga product", res.data);
        setProduct(res.data);
        // setCategory(product.category);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [productid]);

  const handleOnChangeproduct = (value, key) => {
    setProduct({
      ...product,
      [key]: value,
    });
  };

  const update = () => {
    axios
      .put(`https://fakestoreapi.com/products/${productid}`, {
        title: product.title,
        category: product.category,
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  //   useEffect(update, []);

  console.log("here", product);
  return (
    <div>
      <h1>EditProduct</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <InputLabel>Title: </InputLabel>
          <Input
            style={{ width: "30%" }}
            value={product.title}
            onChange={(event) =>
              handleOnChangeproduct(event.target.value, "title")
            }
          ></Input>

          <FormControl style={{ width: "40%" }}>
            <InputLabel id='demo-simple-select-label'>Category</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={product.category}
              label='Category'
              onChange={(event) =>
                handleOnChangeproduct(event.target.value, "category")
              }
            >
              {categories &&
                categories.map((category) => (
                  <MenuItem value={category} key={category}>
                    {category}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Button variant='contained' onClick={update}>
            Update product
          </Button>
        </div>
      )}
    </div>
  );
}
