import React from 'react'
import FormPayment from '../components/forms/MyCheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_SECRET_KEY_STRIPE)
function PaymentPage() {
    return (
        <Elements stripe={stripePromise} >
            <FormPayment />
        </Elements>
    )
}

export default PaymentPage
