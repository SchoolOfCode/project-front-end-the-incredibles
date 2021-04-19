import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../Buttons/Button";
import { useLocation } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CODE);

function Stripe({ total }) {
  const { pathname } = useLocation();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      alert("Order placed! You will receive an email confirmation.");
      window.location.replace(`https://cartshop.netlify.app${pathname}`);
    }

    if (query.get("canceled")) {
      alert(
        "Order canceled - continue to shop around and checkout when you're ready."
      );
      window.location.replace(`https://cartshop.netlify.app${pathname}`);
    }
  }, [pathname]);

  const handleClick = async (count) => {
    const stripe = await stripePromise;

    const response = await fetch(
      `${process.env.REACT_APP_STRIPE_API_URL}/create-checkout-session`,
      {
        method: "POST",
        body: JSON.stringify({
          cancelUrl: `https://cartshop.netlify.app${pathname}?canceled=true`,
          successUrl: `https://cartshop.netlify.app${pathname}?success=true`,
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

  return (
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
