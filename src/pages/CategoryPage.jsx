import React from 'react';
import Header from '../components/Header';
import GridContainerProduct from '../components/GridContainerProduct';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import getCategory from '../api/getCategory';
import Card from '../components/Card';
import styled from 'styled-components';
import Image from '../components/Image';
import BackGroundImage from '../components/BackGroundImage';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Loading from '../components/Loading';


const Flex = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
`

const H = styled.h4`
margin: 5px;
font-size: 20px;`

const H2 = styled.h2`
text-align: center;
margin: 20px;
font-size: 30px;`



const CategoryPage = () => {
    const {id} = useParams()
    const [category, setCategory] = useState(null)
    useEffect(() => {
        fetchCategory()
    }, [id])

    const fetchCategory = async () => {
        const category = await getCategory(id)
        setCategory(category)
        console.log("My category", category)
    }

    if (!category) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            <Header/>
            <BackGroundImage height='400px' src={category.image} alt={category.name} />
             <H2> {category.name} </H2>
                <Section flexDirection='row' margin='80px 0px' alignItems='center'>  
                    <GridContainerProduct>
                        {category.products.map(product => 
                            <Card key={product.name} flexDirection='column'height='250px' width='250px' justifyContent='flex-start' >
                                <Image source={product.image} alt={product.name} height='180px' width='250px' borderRadius='20px 20px 0px 0px'/>
                                <H> {product.name} </H>
                                <Flex> 
                                    <p> Prix au kilo : {product.kiloPrice}€ </p>
                                    <Link to={`/product/${product._id}`} style={{color : 'black', fontSize: '15px'}}> Détails </Link>
                                </Flex> 
                            </Card>)}
                    </GridContainerProduct>
                </Section>
            <Footer/>
        </>
    );
};

export default CategoryPage;