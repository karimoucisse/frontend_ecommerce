import Header from "../components/Header";
import BackGroundImage from "../components/BackGroundImage";
import styled from "styled-components";
import Card from "../components/Card";

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
    height: 600px;
    border-radius: 20px;
`
const Row = styled.div`
    display: flex;
    gap: ${(props) => props.gap? props.gap : "0"};
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    height: 400px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const DescriptionRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 20px 0;
    background-color: #ffff;
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const Logo = styled.i`
    font-size: 70px;
    color: rgb(149,165,166);
`
const Paragraph = styled.p`
    font-weight: 545;
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
                        
                        <Card 
                            source="https://www.lecomptoirdanais.com/89-home_default/bar-entier-elevage-2-pieces.jpg"
                            borderRadius= "20px 0 0 0"
                        />
                        <Card 
                            source="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/2692/coquillages_flickr_11444005806_b82506677e_b.jpg" 
                        />
                        <Card 
                            source="https://www.boutique-paon.fr/4479-large_default/crevette-elevage-cuit-80-100-equateur-ou-autre-pays.jpg" 
                            borderRadius= "0 20px 0 0"
                        />
                    </Row>
                    <Row>
                        <Card 
                            source="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1196/homard-pixabay-lobster-4952603_1280.jpg" 
                            borderRadius= "0 0 0 20px"
                        />
                        <Card 
                            source="https://larecette.net/wp-content/uploads/2019/11/iStock-469781786-1152x768.jpg" 
                            borderRadius= "0 0 20px 0"
                            width= "800px"
                        />
                    </Row>
                </ImageContainer>
            </Section>
            <Section>
                <h1>La pêche du jour </h1>
                <Row gap= "30px">
                    <CardContainer>
                        <Card
                            source={"https://poisson-a-domicile.com/18-large_default/sole-portion.jpg"}
                            width= "100%"
                            height= "300px"
                            borderRadius= "20px 20px 0 0"
                        />
                    </CardContainer>
                    <CardContainer>
                        <Card
                            source={"https://img.cuisineaz.com/680x357/2021/07/20/i179745-shutterstock-1159135621.jpeg"}
                            width= "100%"
                            height= "300px"
                            borderRadius= "20px 20px 0 0"
                        />
                    </CardContainer>
                    <CardContainer>
                        <Card
                            source={"https://www.terreazur.fr/sites/terreazur/files/2018-07/img_saint-pierre_poisson_frais_0.jpg"}
                            width= "100%"
                            height= "300px"
                            borderRadius= "20px 20px 0 0"
                        />
                    </CardContainer>
                </Row>
                <Row gap= "30px">
                    <CardContainer>
                        <Card
                            source={"https://www.lelobster.com/wp-content/uploads/2018/11/homard-breton.jpg"}
                            width= "100%"
                            height= "300px"
                            borderRadius= "20px 20px 0 0"
                        />
                    </CardContainer>
                    <CardContainer>
                        <Card
                            source={"https://www.luximer.com/img/cms/Rouget%20barbet%202.png"}
                            width= "100%"
                            height= "300px"
                            borderRadius= "20px 20px 0 0"
                        />
                    </CardContainer>
                    <CardContainer>
                        <Card
                            source={"https://www.luximer.com/1216-thickbox_default/pave-de-saumon-ecossais-piece-de-200g.jpg"}
                            width= "100%"
                            height= "300px"
                            borderRadius= "20px 20px 0 0"
                        />
                    </CardContainer>
                </Row>
            </Section>
            <Section>
                <h1>comment ça marche</h1>
                <DescriptionRow justifyContent= "space-around">
                    <LogoContainer>
                        <Logo className="fas fa-truck"></Logo>
                        <Paragraph>
                            Vous êtes livré en 24h avec ChronoFresh <br/>
                            afin de conserver la chaîne du froid
                        </Paragraph>
                    </LogoContainer>
                    <LogoContainer>
                        <Logo className="fas fa-fish"></Logo>
                        <Paragraph>Pêche en provenance de nos côtes <br/> normandes et atlantique ouest.</Paragraph>
                    </LogoContainer>
                    <LogoContainer>
                        <Logo className="fas fa-credit-card"></Logo>
                        <Paragraph>Notre site de vente en ligne est 100% <br/> sécurisé et toutes les données sont cryptées</Paragraph>
                    </LogoContainer>
                </DescriptionRow>
            </Section>
            
        </div>;
};

export default Home;
