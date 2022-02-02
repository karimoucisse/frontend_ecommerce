import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GridProducts from "../../components/GridProducts";
import Header from "../../components/Header";
import Row from "../../components/Row";

const FilletPoissons = () => {
    return (
        <Container>
            <Header/>
            <GridProducts 
                src="https://static.750g.com/images/1200-630/e504a771df27bfdca30f73ba27b58865/thinkstockphotos-519918316.jpg"
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

export default FilletPoissons;
