import React from 'react';
import Header from '../components/Header';
import GridContainerProduct from '../components/GridContainerProduct';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import getCategory from '../api/getCategory';
import useDebounce from '../hooks/Debounce';
import Card from '../components/Card';
import styled from 'styled-components';
import Image from '../components/Image';
import BackGroundImage from '../components/BackGroundImage';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Row from '../components/Row';
import Input from '../components/Input';
import SelectPrice from '../components/SelectPrice'


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
    const [sort, setSort] = useState(1)
    const [filter, setFilter] = useState("")
    const debouncedValue = useDebounce(filter, 500)

    useEffect(() => {
        fetchCategory()
    }, [id, sort, debouncedValue])

    const fetchCategory = async () => {
        const category = await getCategory(id, sort, debouncedValue)
        setCategory(category)
        console.log("My category", category)
    }



    const handleSelect = (e) => {
        setSort(e.target.value)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
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
            <Row justifyContent = "space-between" margin= "20px 0" padding= "0 70px" >
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
                        {category.products.map(product => 
                            <Link to={`/product/${product._id}`} style={{color : 'black', fontSize: '15px'}}>
                                <Card key={product.name} flexDirection='column'height='250px' width='250px' justifyContent='flex-start' >
                                    <Image source={product.image} alt={product.name} height='180px' width='250px' borderRadius='20px 20px 0px 0px'/>
                                    <H> {product.name} </H>
                                    <Flex> 
                                        <p> Prix au kilo : {product.kiloPrice}€ </p>
                                    </Flex> 
                                </Card>
                            </Link>
                        )}
                    </GridContainerProduct>
                </Section>
            <Footer/>
        </>
    );
};

export default CategoryPage;