import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProduitDropDown from './ProduitDropDown';

const Container = styled.div`
    background-color: #023047;
    width: 100%;
    display: flex;
    color: #ffff;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    padding: 0px 25px;
    box-sizing: border-box;
`
const Logo = styled.img`
    width: 55px;
    height: 55px;
    font-size: 35px;
    display: flex;
    object-fit: cover;
    align-items: center;
    border-radius: 50%;
`
const Nav = styled.nav`
    display: flex;
    /* gap: 40px; */
    /* width: 30%; */
    gap: 54px;
    align-items: center;
`
const ProduitContainer = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
`
const ArrowIcon = styled(KeyboardArrowDownIcon)`
    cursor: pointer;
    transition:  all ease-in-out 0.2s;
    &:hover {
        transform: scale(1.04);
    }
`
const ListContainer = styled.ul`
    display: flex;
    gap: 25px;
`
const ListItems = styled.li`
    color: #ffff;
`
const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
`
const ZoomIcon = styled(ZoomOutIcon)`
    cursor: pointer;
    transition:  all ease-in-out 0.2s;
    &:hover {
        transform: scale(1.04);
    }
`
const CartIcon = styled(ShoppingCartIcon)`
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &:hover {
        transform: scale(1.04);
    }
`
const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const onProduitClick = () => {
        setIsVisible(!isVisible)
    }
    const onSearchClick = () => {
        setIsSearchVisible(!isSearchVisible)
    }
    return (
        <Container>
            <Link to= "/"><Logo src='/assets/logo.png'/></Link>
            <Nav>
                <ProduitContainer onClick={onProduitClick}>
                    <h3>Nos Produits</h3>
                    <ArrowIcon/>
                    <ProduitDropDown setIsVisible= {setIsVisible} isVisible= {isVisible} />
                </ProduitContainer>
                <ListContainer className="nav justify-content-end">
                    <ListItems className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/login">Se connecter</Link>
                    </ListItems>
                    <ListItems className="nav-item">
                        <Link className="nav-link" to="/signup">S'inscrire</Link>
                    </ListItems>
                </ListContainer>
                <LogoContainer>
                    <ZoomIcon onClick= {onSearchClick}/>
                    <Search isVisible={isSearchVisible}/>                        
                    <Badge badgeContent={4} color="primary">
                        <CartIcon color="action"  style={{ color: "#ffff"}}/>
                    </Badge>
                </LogoContainer>
            </Nav>
            
        </Container>
    );
};

export default Header;