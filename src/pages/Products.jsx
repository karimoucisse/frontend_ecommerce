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
import SearchIcon from '@mui/icons-material/Search';

const Flex = styled.div`
display: flex;
justify-content: space-between;
margin: 5px`

const H = styled.h4`
margin: 5px`

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
        console.log(selectedCategories)
    return (
        <div>
           <h2> Tous nos produits </h2> 
            <Row justifyContent = "space-between" margin= "20px 0" padding= "0 70px">
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
           <Section flexDirection='row'> 
            {products.map(product => 
                <Card flexDirection='column' height='200px' width='200px' justifyContent='space-between'> 
                    <Image source={product.image} alt={product.name} height='140px' width='200px' borderRadius='20px 20px 0px 0px'/>
                    <H> {product.name} </H>
                    <Flex> 
                        <p> Prix au kilo : {product.kiloPrice}€ </p>
                        <p> II </p>
                    </Flex> 
                </Card>)}
           </Section>
           
           
        </div>
    );
};

export default Products;