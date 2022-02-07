import styled from "styled-components";
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import getCategories from '../api/getCategories'

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
    const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
      const categories = await getCategories()
      setCategories(categories)
      console.log("My categories", categories)
  }

    const onElementClick = () => {
        setIsVisible(false)
    }
    
  return (
        <Container isVisible= {isVisible} >
            {categories.map(category => {
                return (
                        <Element onClick={onElementClick}>
                            <Link to={`/categories/${category._id}`} style = {{width: "100%"}}> 
                                {category.name} 
                            </Link>
                        </Element>
                    )
                }
            )}
        </Container>
    )
};

export default ProduitDropDown;
