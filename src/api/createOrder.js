const createOrder = async (user,payload,cart) => {
    let array2 = []
    const filter1 = cart.map(item => item.lineItems.map(e => array2.push(e._id)));

    const response = await fetch ('http://localhost:5000/orders', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            deliveryDate:"2022-02-15",
            user:user._id,
            lineItems:array2
            // invoice:payload.paymentIntent.id
        })
    })
    if(response.status >= 400) {
        alert("Error")
    } else {
        const order = await response.json()
        console.log("lod de order",order);
        
    }
}
export default createOrder