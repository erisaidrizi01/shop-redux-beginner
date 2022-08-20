import React from "react";
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
import { useEffect } from "react";
import { getProduct } from "./Product.actions";

export default function Product() {
  let { productid } = useParams();

  let id = useNavigate();
  let dispatch = useDispatch();
  // const selectorData = useSelector((state) => state.product.data);
  // const [product, setProduct] = useState(selectorData);

  const products = useSelector((state) => state.products.data);
  console.log("product tek products ne redux", products);
  // const product = products.filter ()

  const p1 = products.find((p) => p.id === parseInt(productid));
  const p2 = useSelector((state) => state.product.data);
  const product = p1 ? p1 : p2;

  useEffect(() => {
    if (product === p1) {
      dispatch({
        type: "PRODUCT_SUCCESS",
        payload: product,
      });
    } else {
      dispatch(getProduct(productid));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productid]);

  const loading = useSelector((state) => {
    if (state.product) {
      return state.product.loading;
    }
    return state.products.loading;
  });
  // console.log("nje prove se si duket produkti", product);
  return (
    <div>
      {loading ? <LoadingSpinner /> : null}
      {
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
      }
    </div>
  );
}
