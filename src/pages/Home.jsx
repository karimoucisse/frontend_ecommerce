import Footer from "../components/Footer";
import Header from "../components/Header"
import BackGroundImage from "../components/BackGroundImage";
import styled from "styled-components";
import Row from "../components/Row";
import Image from "../components/Image";
import Card from "../components/Card";
import Section from "../components/Section";
import CardHomepage from "../components/CardHomepage";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import QuantityButton from "../components/QuantityButton";
import CommentCaMarche from "../components/CommentCaMarche";
import {useEffect, useState} from 'react';
import getCategories from "../api/getCategories";

const ImageContainer = styled.div`
    height: 600px;
    border-radius: 20px;
`
const ProductTitle = styled.h2`
    position: absolute;
    bottom: 70px;
    left: 20%;
    right: 0;
    margin: auto !important;
    color: #ffff;
    text-shadow: 4px 4px 4px black;
    font-weight: 600;
    text-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

const Home = () => {
const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
      }, [])
    
      const fetchCategories = async () => {
          const categories = await getCategories()
          setCategories(categories)
          console.log("My categories", categories)
      }
    
   
    return ( 
        <Container>
            <Header/>
            <BackGroundImage 
                src= "https://www.mashed.com/img/gallery/11-mistakes-everyone-makes-when-cooking-fish/intro.jpg" 
                alt= "homepage fish"
                isShadow
            />
            <Section>
                <h1>Que cherchez vous ?</h1>
                <ImageContainer>
                    
                        {categories.map(category => {
                            return <Row position = "relative" key={category.name}> 
                                        <Card
                                            key={category.name}
                                            width= {category.width} 
                                            height= "300px" 
                                            position= "relative"
                                            // onClickAction = 
                                        >
                                            <Image 
                                                source= {category.image}
                                                borderRadius="20px"
                                                width = "400px"
                                                isShadow
                                            />
                                            <ProductTitle>{category.name}</ProductTitle>
                                        </Card>
                            </Row>
                        })}
                            
                        
                     
                </ImageContainer>
            </Section>
            <Section>
                <h1>La pêche du jour </h1>
                {CardHomepage.map((card, cardIndex) => {
                    return <Row gap= "30px" key={cardIndex}>
                            {card.map((image, index) => {
                                return <Card key={index} flexDirection= "column" justifyContent= "flex-end">
                                    <Image
                                        source = {image.source}
                                        borderRadius={image.borderRadius}
                                    />
                                    <QuantityButton margin= "0"/>
                                </Card>
                            })}
                        </Row>
                })}
            </Section>
            <CommentCaMarche/>
            <Footer/>
        </Container>
    )
};

export default Home;
