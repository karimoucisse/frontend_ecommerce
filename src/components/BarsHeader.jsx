import Container from './Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import { useNavigate } from 'react-router';
import { UserContext } from "../context/User";
import { CartContext } from "../context/Cart";
import { useContext, useState} from "react";
import { useMediaQuery } from 'react-responsive'

import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProduitDropDown from './ProduitDropDown';
import Loading from './Loading';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
`
const ListContainer = styled.ul`
    display: flex;
    gap: 25px;
`
const ListItems = styled.li`
    color: #ffff;
`
const Icone = styled.i`
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: #f1ecec;
    }
`
const CartIcon = styled(ShoppingCartIcon)`
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &:hover {
        transform: scale(1.04);
    }
`

const BarsHeader = () => {
    const {user} = useContext(UserContext)
    // const {cart} = useContext(CartContext)
    const navigate = useNavigate()

    // if(!cart) {
    //     return <Loading/>
    // }
    
  return (
        <Container 
            height= "500px" 
            width= "300px"
            position= "absolute" 
            backGroundColor= "#023047" 
            top= "55px"
            right= "0"
            zIndex = "3"
            
        >
        <Header>
            {!user &&
                <ListContainer >    
                    <ListItems>
                        <Link to="/login">Se connecter</Link>
                    </ListItems>
                    <ListItems>
                        <Link to="/signup">S'inscrire</Link>
                    </ListItems>
                </ListContainer>
            }
            {user && 
                <Icone 
                    className="fas fa-user-alt" 
                    onClick={() => navigate("/profil")}
                >
                </Icone>
            }
            <Badge badgeContent={4} color="primary" onClick= {() => navigate("/panier")}>
                <CartIcon color="action"  style={{ color: "#ffff"}}/>
            </Badge>
        </Header>
            
            <ProduitDropDown isVisible/>
            
        </Container>
    )
};

export default BarsHeader;




