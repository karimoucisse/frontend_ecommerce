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
import BarsHeader from './BarsHeader';
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
    width: 75px;
    height: 55px;
    font-size: 35px;
    display: flex;
    object-fit: cover;
    align-items: center;
    /* border-radius: 50%; */
    background-color: white;
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
const Icone = styled.i`
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: #f1ecec;
    }
`

const BarsElement = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 10px;
    background: transparent;
    border-radius: 2px;

`
const SpanBars = styled.span`
    /* width: 30px;
    height: 2px; */
    /* transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    width: 2rem;
    height: 0.25rem; */
    /* width: 100%; */
    /* background-color: #ffff; */
    
    &:nth-child(1) {
      
    }
    &:nth-child(2) {
  
    }
    &:nth-child(3) {
   
    }
`


const Header = () => {
    const {user} = useContext(UserContext)
    // const {cart} = useContext(CartContext)
    const [isVisible, setIsVisible] = useState(false)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [isBarsDropDownActive, setIsBarsDropDownActive ] = useState(false)

    const isTablet = useMediaQuery({ query: '(max-width: 760px)' })

    const navigate = useNavigate()

    const onProduitClick = () => {
        setIsVisible(!isVisible)
    }
    const onSearchClick = () => {
        setIsSearchVisible(!isSearchVisible)
    }

    // if(!cart.lineItems) {
    //     return <Loading height= "55px"/>
    // }
    return (
        <Container>
            <Link to= "/"><Logo src='/assets/logo.svg'/></Link>
            {isTablet ? 
                <>
                    <BarsElement>
                        <SpanBars></SpanBars>
                        <SpanBars></SpanBars>
                        <SpanBars></SpanBars>
                    </BarsElement>
                    <BarsHeader/>
                </>
                :

                <Nav>
                    <ProduitContainer onClick={onProduitClick}>
                        <h3>Nos Produits</h3>
                        <ArrowIcon/>
                        <ProduitDropDown setIsVisible= {setIsVisible} isVisible= {isVisible} />
                    </ProduitContainer>
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


                    <LogoContainer>
                        {user && 
                            <Icone 
                                className="fas fa-user-alt" 
                                onClick={() => navigate("/profil")}
                            >
                            </Icone>
                        }
                        <ZoomIcon onClick= {onSearchClick}/>
                        <Search isVisible={isSearchVisible}/>      
                        {/* cart.lineItems.length                   */}
                        <Badge badgeContent={4} color="primary" onClick= {() => navigate("/panier")}>
                            <CartIcon color="action"  style={{ color: "#ffff"}}/>
                        </Badge>
                    </LogoContainer>
                </Nav>
            }
            
        </Container>
    );
};

export default Header;