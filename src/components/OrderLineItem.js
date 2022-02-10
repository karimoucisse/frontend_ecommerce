import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import getProduct from '../api/getProduct'
import Card from './Card'

const Div = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px 5px ;
    font-size: 20px;
    width: 100%;
`

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
        <Div>
            <h4> {product.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Poid: {item.weight}</p>
            <p>Prix: {Math.round(item.totalPrice * 100) / 100}</p>
        </Div>

    )
}

export default OrderLineItem
