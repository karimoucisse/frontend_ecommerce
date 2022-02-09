import React from 'react'
import FormPayment from '../components/forms/MyCheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51KQpt6Bv9r0udF87jbxII9G4HE30z6VEMe8Ji0gGfRBvDs6pgN074791nu1NjtfklN4LqbZStHF8LhUkLFPU17Dz00jt8x8wXe")
function PaymentPage() {
    return (
        <Elements stripe={stripePromise} >
            <FormPayment />
        </Elements>
    )
}

export default PaymentPage
