import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./Product.actions";

export default function Product() {
  let { productid } = useParams();
  const dispatch = useDispatch();
  let id = useNavigate();

  useEffect(() => {
    dispatch(getProduct(productid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productid]);

  const loading = useSelector((state) => state.product.loading);
  const product = useSelector((state) => state.product.data);
  console.log("product tek", product, loading);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            alt='product'
            width='100'
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Title: {product.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Category: {product.category}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Id: {product.id}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Price: {product.price}
            </Typography>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button
                variant='contained'
                style={{ color: "alert" }}
                onClick={() => {
                  id(`/products/${product.id}/edit`);
                }}
              >
                EDIT PRODUCT
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
