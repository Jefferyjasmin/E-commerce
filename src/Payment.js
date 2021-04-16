import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotoal } from "./reducer";
import axios from "./axios";

//www.youtube.com/watch?v=RDV3Z1KCBvo
// 634.11

const Payment = () => {
  const [{ user, basket }] = useStateValue();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const repsonse = await axios({
        method: "post",
        // stripe expects the total in currencies subunits ex $10 must be displayed in cents 1000
        url: `/payments/create?total${getBasketTotoal(basket) * 100}`,
      });
      setClientSecret(repsonse.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment Confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section-delivery */}
        <div className="payment_Section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>135 Ocean Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment_Section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_items">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_Section">
          <h3> Payment Method</h3>
        </div>
        <div className="payment_details">
          {/* stripe magic will goo  */}
          {/* npm i @stripe/stripe-js */}
          {/* npm i @stripe/react-stripe-js */}
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment_priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>order total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotoal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                {processing ? <p>Processing</p> : "Buy Now"}
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
