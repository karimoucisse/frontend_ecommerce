import React from 'react';
import { useState, useEffect } from 'react';
import getProducts from '../api/getProducts';
import Card from '../components/Card'
import Image from '../components/Image'
import Section from '../components/Section'
import styled from 'styled-components'
import Row from '../components/Row';
import Input from '../components/Input';
import SelectPrice from '../components/SelectPrice'
import useDebounce from '../hooks/Debounce';
import SelectCategory from '../components/SelectCategory'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundImage from '../components/BackGroundImage';
import Container from '../components/Container';
import GridContainerProduct from '../components/GridContainerProduct';
import {Link} from 'react-router-dom'


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




const Products = () => {
    const [products, setProducts] = useState(null)
    const [sort, setSort] = useState(1)
    const [filter, setFilter] = useState("")
    const [selectedCategories, setSelectedCategories] = useState([])
    const debouncedValue = useDebounce(filter, 500)

    useEffect(() => {
        fetchProducts()
    }, [sort, debouncedValue, selectedCategories])

    const fetchProducts = async () => {
        const products = await getProducts(sort, filter, selectedCategories)
        setProducts(products)
        console.log("My products", products)
    }

    const handleSelect = (e) => {
        setSort(e.target.value)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    const handleCategories = (event) => {
          const {
            target: { value },
          } = event;
          setSelectedCategories(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
          
        };

    if (!products) {
        return (
            <p> Loading... </p>
        )
    }
        console.log("selectedCategories",selectedCategories)
    return (
        <Container>
            <Header />
            <BackGroundImage height='400px' src='https://img.freepik.com/photos-gratuite/vue-dessus-variete-poissons-fruits-mer-frais-glace_126277-744.jpg?size=626&ext=jpg' alt='poissons' />
           <H2> Tous nos produits </H2> 
            <Row justifyContent = "space-between" margin= "20px 0" padding= "0 70px" >
                <SelectCategory
                    onChange={handleCategories}
                    selectedCategories={selectedCategories}
                />
                <Input
                    placeholder= "Chercher votre produit ..."
                    onChange={handleFilter} 
                    value={filter}   
                    label="Produit"
                    sx={{width : 500}} 

                />
                <SelectPrice onChange={handleSelect} sx={{width : 200}} />
            </Row>
           <Section flexDirection='row' margin='80px 0px' alignItems='center'>  
            <GridContainerProduct>
            {products.map(product => 
                <Card flexDirection='column' height='250px' width='250px' > 
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
           
        </Container>
    );
};

export default Products;