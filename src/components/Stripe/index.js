import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ProductDisplay from "../ProductDisplay";
import Message from "../Message";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IZfAwFRa1Oylsq2lp7aqOS2UMFNjtLkIvq37PCuvRbLtB8rVIW314mhGjSZ2v7ZjKmqvZWQqfwiXx31D4ZS3D2o00sfXcdJHn"
);

function Stripe() {
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      setRedirect("You will be redirected to the checkout in 5 seconds");
      // we can add a button here to go back to the home back.
      setTimeout(function () {
        window.location.replace("http://localhost:3000/checkout");
      }, 5000);
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({
        cancelUrl: "https://www.google.com",
        successUrl: "https://www.google.com",
        payment_method_types: ["card"],
        lineItems: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Macrame",
                images: ["https://i.imgur.com/EHyR2nP.png"],
              },
              unit_amount: 1000,
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
    <ProductDisplay handleClick={handleClick} />
  );
}

export default Stripe;
