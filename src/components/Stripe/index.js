import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../Buttons/Button";
import Message from "../Message";
import {useLocation} from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CODE);

function Stripe({ total }) {
  const {pathname } = useLocation();

  console.log(pathname);
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      setRedirect("You will be redirected to the checkout in 5 seconds");
      //we can add a button here to go back to the home back.
      setTimeout(function () {
        window.location.reload();
      }, 10000);
      // setTimeout(function () {
      //   window.location.replace("http://localhost:3000/store");
      // }, 10000);
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (count) => {
    const stripe = await stripePromise;
    console.log(message);
    console.log(redirect);
    console.log(count);

    const response = await fetch(
      `${process.env.REACT_APP_STRIPE_API_URL}/create-checkout-session`,
      {
        method: "POST",
        body: JSON.stringify({
          cancelUrl: `https://cartshop.netlify.app${pathname}`,  // needs to be amended to actual store customer is in.
          successUrl: `https://cartshop.netlify.app${pathname}`,
          payment_method_types: ["card"],
          lineItems: [
            {
              price_data: {
                currency: "gbp",
                product_data: {
                  name: "Total",
                },
                unit_amount: count,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
        }),
        headers: {
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${process.env.REACT_APP_STRIPE_CODE}`,
        },
      }
    );

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} redirect={redirect} />
  ) : (
    <Button
      className="blackBtn"
      textContent="Checkout"
      onClick={() => {
        handleClick(parseInt(total));
      }}
    />
  );
}

export default Stripe;
