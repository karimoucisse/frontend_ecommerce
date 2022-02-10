import Footer from "../components/Footer";
import Header from "../components/Header"
import BackGroundImage from "../components/BackGroundImage";
import styled from "styled-components";
import Row from "../components/Row";
import Image from "../components/Image";
import Card from "../components/Card";
import Section from "../components/Section";
import Container from "../components/Container";
import { useNavigate, Link } from "react-router-dom";
import CommentCaMarche from "../components/CommentCaMarche";
import {useEffect, useState} from 'react';
import getCategories from "../api/getCategories";
import GridContainerProduct from "../components/GridContainerProduct";
import Loading from "../components/Loading";



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

const Flex = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
`
const H = styled.h4`
margin: 5px;
font-size: 20px;`
    

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
      }, [])
    
      const fetchCategories = async () => {
          const categories = await getCategories()
          setCategories(categories)
          console.log("My categories home", categories)
      }

    const navigate = useNavigate();
    const ProductListImages = [
        [
            {
                source : "https://www.lecomptoirdanais.com/89-home_default/bar-entier-elevage-2-pieces.jpg",
                borderRadius: "20px 0 0 0",
                width: "400px",
                content: "Nos  poissons entiers"
            },
            {
                source:"https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/2692/coquillages_flickr_11444005806_b82506677e_b.jpg",
                borderRadius: "0 0 0 0",
                width: "400px",
                content: "Nos coquillages"
            },
            {
                source: "https://www.boutique-paon.fr/4479-large_default/crevette-elevage-cuit-80-100-equateur-ou-autre-pays.jpg",
                borderRadius: "0 20px 0 0",
                width: "400px",
                content: "Nos crustacés"
            }
        ],
        [
            {
                source: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1196/homard-pixabay-lobster-4952603_1280.jpg", 
                borderRadius: "0 0 0 20px",
                width: "400px",
                content: "Nos produits festifs"

            },
            {
                source: "https://larecette.net/wp-content/uploads/2019/11/iStock-469781786-1152x768.jpg",
                borderRadius: "0 0 20px 0",
                width: "800px",
                content: "Nos filets de poisson"
            }
        ]
    ]
    const onclickNavigate = (content) => {
        switch (content) {
            case 'Nos  poissons entiers':
                navigate("/categories/61fd213faab4a988cfb816b7")
                break;
            case 'Nos coquillages':
                navigate("/categories/61fd20b9aab4a988cfb816b5")
                break;
            case 'Nos crustacés':
                navigate("/categories/61f7b97f6384d88156c62890")
                break;
            case 'Nos produits festifs':
                navigate("/categories/61fd22dcaab4a988cfb816bb")
                break;
            case 'Nos filets de poisson':
                navigate("/categories/61fd2238aab4a988cfb816b9")
                break;
            
            default:
            navigate("/")
        }
    }

    const category = "La pêche du jour"
    const laPecheDuJour = categories.find(element => element.name === category)
    console.log(laPecheDuJour)


    if (!laPecheDuJour) {
        return null
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
                    
                        {ProductListImages.map((listImage, rowIndex) => {
                            return <Row position = "relative" key={rowIndex}> 
                                {listImage.map((element, index) => {
                                return (
                                        <Card
                                            key={index}
                                            width= {element.width} 
                                            height= "300px" 
                                            position= "relative"
                                            onClickAction = {() => onclickNavigate(element.content)}
                                        >
                                            <Image 
                                                source= {element.source}
                                                borderRadius={element.borderRadius}
                                                width = {element.width ? element.width : "400px"}
                                                isShadow
                                            />
                                            <ProductTitle>{element.content}</ProductTitle>
                                        </Card>
                                    )
                            })}
                            </Row>
                        })}
                     
                </ImageContainer>
            </Section>
            <Section >
                <h1>La pêche du jour </h1>
                <GridContainerProduct>
                    {laPecheDuJour.products.map(product => (
                        <Link to={`/product/${product._id}`} style={{color : 'black', fontSize: '15px'}}>
                            <Card flexDirection='column'height='250px' width='250px' justifyContent='flex-start'  > 
                                <Image source={product.image} alt={product.name} height='180px' width='250px' borderRadius='20px 20px 0px 0px'/>
                                <H> {product.name} </H>
                                <Flex> 
                                    <p> Prix au kilo : {product.kiloPrice}€ </p>
                                    
                                </Flex> 
                            </Card>
                        </Link>
                    ))}
                </GridContainerProduct>
            </Section>
            <CommentCaMarche/>
            <Footer/>
        </Container>
    )
};

export default Home;

