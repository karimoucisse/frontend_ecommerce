import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Container = styled.div`
    background-color: #023047;
    width: 100%;
    display: flex;
    color: #ffff;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    padding: 0px 25px;
`
const Logo = styled.div`
    width: 40px;
    height: 20px;
    font-size: 25px;
    display: flex;
    align-items: center;
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
    return (
        <Container>
            <Logo>Logo</Logo>
            <Nav>
                <ProduitContainer>
                    <h3>Nos Produits</h3>
                    <ArrowIcon/>
                </ProduitContainer>
                <ListContainer className="nav justify-content-end">
                    <ListItems className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Se connecter</Link>
                    </ListItems>
                    <ListItems className="nav-item">
                        <Link className="nav-link" to="/signup">S'inscrire</Link>
                    </ListItems>
                </ListContainer>
                <LogoContainer>
                    <ZoomIcon/>
                    <Badge badgeContent={4} color="primary">
                        <CartIcon color="action"  style={{ color: "#ffff"}}/>
                    </Badge>
                </LogoContainer>
            </Nav>
            
        </Container>
    );
};

export default Header;