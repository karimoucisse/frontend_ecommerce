import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    position: absolute;
    top: 55px;
    z-index: 1;
    background-color: #023047;
    transform: ${(props) => props.isVisible ? "scaleY(1)" : "scaleY(0)" } ;
    transform-origin: top;
    transition: all .2s ease-in-out;

    /* padding: 10px 0; */
`
const Element = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    padding-left: 20px;
    font-size: 18px;
    font-weight: 500;
    /* justify-content: center; */
    align-items: center;
    transition: all ease-in 0.2s;
    &:hover {
        background-color: #034061;
    }
`
const ProduitDropDown = ({isVisible, setIsVisible}) => {

    const onElementClick = () => {
        setIsVisible(false)
    }
    
  return (
        <Container isVisible= {isVisible} >
            <Element onClick={onElementClick}>Nos poisson entiers</Element>
            <Element onClick={onElementClick}>Nos coquillages</Element>
            <Element onClick={onElementClick}>Nos crustacés</Element>
            <Element onClick={onElementClick}>Nos Produit festif</Element>
            <Element onClick={onElementClick}>Nos fillet de poisson</Element>
        </Container>
    )
};

export default ProduitDropDown;
