import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProductItem = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 300 }}
      className='card'
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/products/${props.product.id}`)}
    >
      <CardMedia
        component='img'
        alt='product'
        width='70'
        height='fit-height'
        image={props.product.image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Title: {props.product.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Category: {props.product.category}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Id: {props.product.id}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Price: {props.product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
