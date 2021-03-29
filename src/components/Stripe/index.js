import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ProductDisplay from "../ProductDisplay";
import CheckoutButton from "../Buttons/CheckoutButton";
import Message from "../Message";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CODE);

function Stripe({ total }) {
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
        window.location.replace("http://localhost:3000/store");
      }, 10000);
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

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({
        cancelUrl: "https://localhost:3000/store",
        successUrl: "https://localhost:3000/store",
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

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
    <CheckoutButton
      onClick={() => {
        handleClick(parseInt(total));
        console.log(message);
        console.log(redirect);
      }}
    />
  );
}

export default Stripe;
