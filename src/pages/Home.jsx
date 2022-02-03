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
                content: "Nos produit festif"

            },
            {
                source: "https://larecette.net/wp-content/uploads/2019/11/iStock-469781786-1152x768.jpg",
                borderRadius: "0 0 20px 0",
                width: "800px",
                content: "Nos fillet de poissons"
            }
        ]
    ]
    const onclickNavigate = (content) => {
        switch (content) {
            case 'Nos  poissons entiers':
                navigate("/poisson_entiers")
                break;
            case 'Nos coquillages':
                navigate("/coquillages")
                break;
            case 'Nos crustacés':
                navigate("/crustaces")
                break;
            case 'Nos produit festif':
                navigate("/produit_festif")
                break;
            case 'Nos fillet de poissons':
                navigate("/fillet_de_poissons")
                break;
            
            default:
            navigate("/")
        }
        console.log("hello");
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
