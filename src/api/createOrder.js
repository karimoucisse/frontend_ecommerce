const createOrder = async (user, deliveryDate, cart) => {
    const response = await fetch ('http://localhost:5000/orders', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            deliveryDate: deliveryDate,
            user: user._id,
            lineItems: cart.lineItems.map(item => item._id)
            // invoice:payload.paymentIntent.id
        })
    })

    if(response.status >= 400) {
        alert("Error")
    } else {
        const order = await response.json()
        return order
    }
}

export default createOrder