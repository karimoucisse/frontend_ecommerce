import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { CartContext } from "../../context/Cart";
import Header from "../Header";
import createOrder from "../../api/createOrder";
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import styled from "styled-components";
import Container from "../Container";

 // this means 14 usd and can also be calculated at the backend

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 8px 30px;
    background-color: #023047;
    color: #ffff;
    cursor: pointer;
    border: none;
    border-radius: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 300px;
    width: 500px;
    background-color: white;
    border-radius: 20px;
    padding: 0 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const CardElements = styled(CardElement)`
    gap: 20px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`
function MyCheckoutForm() {
    const navigate = useNavigate()
    const {user , getUser } = useContext(UserContext)
    const {cart, createCart, selectedDay} = useContext(CartContext)

    console.log(cart," cart et user",user);

    const [clientSecret, setClientSecret] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    
    let totalPrice = 1
    if (cart) {
        cart.lineItems.map(item => {return totalPrice = totalPrice + item.totalPrice})
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
            const order = await createOrder(user, selectedDay,cart)
            console.log(order)

            // creer la facture quand on a l`order

            await getUser()

            if (order) {
                navigate('/profil?type=historique')
                createCart({
                    user: user._id
                })
            }

        }

    }

    if (!paymentStatus || paymentStatus === "loading") {
        return (
            <Container>
                <Header/>
                <Container 
                    height= "80vh" 
                    display= "flex" 
                    flexDirection= "column" 
                >
                    <Form id="payment-form" onSubmit={makePayment}>
                        <CardElements id="card-element" />
                        <ButtonContainer>
                            <Button disabled={paymentStatus === "loading"} type="submit"> Pay Now </Button>
                        </ButtonContainer>
                    </Form>
                    {paymentStatus === "loading" && <h1>Nous interrogeons votre banque, un instant svp...</h1>}
                </Container>
            </Container>
        )
    }
    
    if (paymentStatus === "succeeded") {
        return (
            <Container>
                <Header/>
                <h1>Paiement validé</h1>
            </Container>
        )
    }

    return (
        <Container>
            <Header/>
            <h1>Paiement refusé</h1>
        </Container>

    )
}

export default MyCheckoutForm
