import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { CartContext } from "../../context/Cart";
const totalPrice = 5000; // this means 14 usd and can also be calculated at the backend

function MyCheckoutForm() {

    const {user , setUser} = useContext(UserContext)
    const {cart, setCart} = useContext(CartContext)
    console.log(cart,"et",user);
    const [clientSecret, setClientSecret] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    // STEP 1: create a payment intent and getting the secret
useEffect(() => {
    fetch("http://localhost:5000/create-checkout-session", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: totalPrice }),
    })
    .then(res => res.json())
    .then((data) => {
        setClientSecret(data.clientSecret);  // <-- setting the client secret here
    });
}, []);

// STEP 2: make the payment after filling the form properly
    const makePayment = async (e) => {
        e.preventDefault()

        setPaymentStatus("loading")

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "vlad"
                }
            },
        });

        setPaymentStatus(payload.paymentIntent.status)


    }

    if (!paymentStatus || paymentStatus === "loading") {
        return (
            <>
                <form id="payment-form" onSubmit={makePayment}>
                    <CardElement id="card-element" />
                    <button disabled={paymentStatus === "loading"} type="submit"> Pay Now </button>
                </form>
                {paymentStatus === "loading" && <h1>Nous interrogeons votre banque, un instant svp...</h1>}
            </>
        )
    }
    
    if (paymentStatus === "succeeded") {
        return (
            <h1>BRAVO TU AS PAYE</h1>
        )
    }

    return (
        <h1>CREVARDO</h1>
    )
}

export default MyCheckoutForm
