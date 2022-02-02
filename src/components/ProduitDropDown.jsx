import styled from "styled-components";
import { Link } from 'react-router-dom';
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
`
const Element = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    padding-left: 20px;
    font-size: 18px;
    font-weight: 500;
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
            <Element onClick={onElementClick}><Link to= "/poisson_entiers">Nos poisson entiers</Link></Element>
            <Element onClick={onElementClick}><Link to= "/coquillages">Nos coquillages</Link></Element>
            <Element onClick={onElementClick}><Link to= "/crustaces">Nos crustacés</Link></Element>
            <Element onClick={onElementClick}><Link to= "/produit_festif">Nos Produit festif</Link></Element>
            <Element onClick={onElementClick}><Link to= "/fillet_de_poissons">Nos fillet de poisson</Link></Element>
        </Container>
    )
};

export default ProduitDropDown;
