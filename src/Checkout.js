import React from "react";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          alt="Checkout"
          src="https://media.istockphoto.com/photos/melting-candle-on-cool-blue-background-picture-id1016998564?k=6&m=1016998564&s=612x612&w=0&h=B4-pIf9cdFd1MuZMdDx2sG6pnuqdFParWivbtzEWOZg="
        />

        {basket?.length === 0 ? (
          <div>
            <h2> Your Shopping Basket is empty</h2>
            <p>
              You have no ites in your basket. To buy an item please click on
              "Add to baset" Underneath the item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title"> Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
