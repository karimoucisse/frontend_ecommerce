import React, { useState, useEffect } from 'react'
import getProduct from '../api/getProduct'

function OrderLineItem({ item }) {
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const response = await getProduct(item.product)

        setProduct(response)
    }

    return (
        <div>
            <p>{product.name}</p>
            <p>{item.quantity}</p>
            <p>{item.weight}</p>
            <p>{item.totalPrice}</p>
        </div>
    )
}

export default OrderLineItem
