import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { CartContext } from "../../context/Cart";
import Header from "../Header";
import createOrder from "../../api/createOrder";

 // this means 14 usd and can also be calculated at the backend

function MyCheckoutForm() {

    const {user , setUser} = useContext(UserContext)
    const {cart, setCart} = useContext(CartContext)

    console.log(cart," cart et user",user);

    const [clientSecret, setClientSecret] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    
    let totalPrice = 1
    if (cart) {
        cart.map(e =>  e.lineItems.map(item => {return totalPrice = totalPrice + item.totalPrice}))   
    }
    totalPrice = Math.floor(totalPrice * 100)
    totalPrice -= 1
    console.log("total",totalPrice)
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
                    name: `${user.firstName} ${user.name}`,
                    email: user.email,
                    phone: user.phoneNumber,
                    address: {
                        line1:user.adress
                    }
                }
            },
        });
        console.log(payload, "mon paylod");

        setPaymentStatus(payload.paymentIntent.status)
        if (payload.paymentIntent.status === "succeeded") {
            createOrder(user,payload,cart)
        }

    }

    if (!paymentStatus || paymentStatus === "loading") {
        return (
            <>
                <Header/>
                <form style={{marginTop:"50px",border:"1px solid black"}} id="payment-form" onSubmit={makePayment}>
                    <CardElement id="card-element" />
                    <button disabled={paymentStatus === "loading"} type="submit"> Pay Now </button>
                </form>
                {paymentStatus === "loading" && <h1>Nous interrogeons votre banque, un instant svp...</h1>}
            </>
        )
    }
    
    if (paymentStatus === "succeeded") {
        return (
            <>
            <Header/>
            <h1>BRAVO TU AS PAYE</h1>
            </>
        )
    }

    return (
        <>
        <Header/>
        <h1>CREVARDO</h1>
        </>

    )
}

export default MyCheckoutForm
