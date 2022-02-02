import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GridProducts from "../../components/GridProducts";
import Header from "../../components/Header";
import Row from "../../components/Row";

const Crustaces = () => {
    return (
        <Container>
            <Header/>
            <GridProducts 
                src="https://www.poissonnerie-delage.fr/userfiles/28293/POISSONNERIE--DELAGE1.jpg"
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

export default Crustaces;
