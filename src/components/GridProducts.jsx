import BackGroundImage from "./BackGroundImage";
import Container from "./Container";
import Row from "./Row";
import Input from "./Input";
import Select from "./Select";

const GridProducts = ({children, src, alt}) => {
    return (
        <Container>
            <BackGroundImage 
                isShadow
                height= "550px" 
                src= {src} 
                alt= {alt}
            />
            <Row justifyContent = "space-between" margin= "20px 0" padding= "0 70px">
                <Input
                    placeholder= "Chercher votre produit ..."
                    width= "300px"
                />
                <Select/>
            </Row>
            <Container margin= "40px 0 " display= "flex" gap= "20px" flexDirection= "column">
                {children}
            </Container>
        </Container>
    )
};

export default GridProducts;
