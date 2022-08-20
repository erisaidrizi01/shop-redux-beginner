import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let { productid } = useParams();
  let id = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .then((res) => {
        console.log("res nga product", res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [productid]);

  return (
    <div>
      {isLoading ? (
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
