import Header from "../components/Header";
import BackGroundImage from "../components/BackGroundImage";
import styled from "styled-components";

const BackgroundTitle = styled.h2`
    position: absolute;
    color: #ffff;
    top: 40vh;
    left: 10vw;
    transform: rotate(-30deg);
    font-size: 45px;
    font-family: "Risque";
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 25px;
`
const ImageContainer = styled.div`
    /* width: 80%; */
    background-color: red;
    height: 600px;
    border-radius: 20px;
`
const Row = styled.div`
    display: flex;
`
const FirstRowCard = styled.img`
    width: 400px;
    height: 300px;
    object-fit: cover;
    &:nth-child(1) {
       border-top-left-radius: 20px;
    }
    &:nth-child(3) {
       border-top-right-radius: 20px;
    }
    /* background: #ffff; */
    /* border: 2px solid #ffff; */
`
const SecondRowCard = styled.img`
    width: 400px;
    height: 300px;
    object-fit: cover;
    &:nth-child(1) {
        border-bottom-left-radius: 20px;
    }
    &:nth-child(2) {
        border-bottom-right-radius: 20px;
        width: 800px;
    }
    /* background: #ffff; */
    /* border: 2px solid #ffff; */
`
const Home = () => {
  return <div>
            <Header/>
            <BackGroundImage 
                src= " https://www.mashed.com/img/gallery/11-mistakes-everyone-makes-when-cooking-fish/intro.jpg" 
                alt= "homepage fish"
            />
            {/* <BackgroundTitle>Saveur d'autre mer</BackgroundTitle> */}
            <Section>
                <h1>Que cherchez vous ?</h1>
                <ImageContainer>
                    <Row>
                        
                        <FirstRowCard src="https://www.lecomptoirdanais.com/89-home_default/bar-entier-elevage-2-pieces.jpg"/>
                        <FirstRowCard src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/2692/coquillages_flickr_11444005806_b82506677e_b.jpg" alt="" />
                        <FirstRowCard src="https://www.boutique-paon.fr/4479-large_default/crevette-elevage-cuit-80-100-equateur-ou-autre-pays.jpg" alt="" />
                    </Row>
                    <Row>
                        <SecondRowCard src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1196/homard-pixabay-lobster-4952603_1280.jpg" alt=""/>
                        <SecondRowCard src="https://larecette.net/wp-content/uploads/2019/11/iStock-469781786-1152x768.jpg" alt=""/>
                    </Row>
                </ImageContainer>
            </Section>
        </div>;
};

export default Home;
