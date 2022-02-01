import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GridProducts from "../../components/GridProducts";
import Header from "../../components/Header";
import Row from "../../components/Row";

const Poissons = () => {
    return (
        <Container>
            <Header/>
            <GridProducts 
                src="https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2021.2F08.2F06.2F444f2ea9-9241-4f53-8203-d08252319612.2Ejpeg/1200x600/quality/80/crop-from/center/focus-point/704%2C457/disparition-des-especes-biodiversite-en-danger-comment-choisir-son-poisson.jpeg"
                alt = "poisson entier"
            >
                <Row width= "100%" gap= "30px" justifyContent= "center" >
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                </Row>
                <Row width= "100%" gap= "30px" justifyContent= "center" >
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                </Row>
                <Row width= "100%" gap= "30px" justifyContent= "center" >
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                    <Card width= "300px" height= "350px"/>
                </Row>
            </GridProducts>
            <Footer/>
        </Container>
    )
};

export default Poissons;
