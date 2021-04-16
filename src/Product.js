import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="candel" />
      <div className="product_info">
        <p>{title}</p>
        <p className="product_">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p> * </p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
