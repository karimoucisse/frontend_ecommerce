// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import Search from './Search';
// import { useNavigate } from 'react-router';
// import { UserContext } from "../context/User";
// import { CartContext } from "../context/Cart";
// import { useContext, useState} from "react";
// import { useMediaQuery } from 'react-responsive'

// import ZoomOutIcon from '@mui/icons-material/ZoomOut';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ProduitDropDown from './ProduitDropDown';
// import Loading from './Loading';

// const BarsHeader = () => {
//     const {user} = useContext(UserContext)
//   return (
//         <Container>
//             <Nav>
//                 <ProduitContainer onClick={onProduitClick}>
//                     <h3>Nos Produits</h3>
//                     <ArrowIcon/>
//                     <ProduitDropDown setIsVisible= {setIsVisible} isVisible= {isVisible} />
//                 </ProduitContainer>
//                     {!user &&
//                         <ListContainer >    
//                             <ListItems>
//                                 <Link to="/login">Se connecter</Link>
//                             </ListItems>
//                             <ListItems>
//                                 <Link to="/signup">S'inscrire</Link>
//                             </ListItems>
//                         </ListContainer>
//                     }


//                 <LogoContainer>
//                     {user && 
//                         <Icone 
//                             className="fas fa-user-alt" 
//                             onClick={() => navigate("/profil")}
//                         >
//                         </Icone>
//                     }
//                     <ZoomIcon onClick= {onSearchClick}/>
//                     <Search isVisible={isSearchVisible}/>                        
//                     <Badge badgeContent={cart.lineItems.length} color="primary" onClick= {() => navigate("/panier")}>
//                         <CartIcon color="action"  style={{ color: "#ffff"}}/>
//                     </Badge>
//                 </LogoContainer>
//             </Nav>
//         </Container>
//     )
// };

// export default BarsHeader;


// {isTablet &&  
//     <BarsElement>
//         <SpanBars></SpanBars>
//         <SpanBars></SpanBars>
//         <SpanBars></SpanBars>
//     </BarsElement>
// }

// const BarsElement = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 30px;
//     height: 30px;
//     justify-content: space-between;
// `
// const SpanBars = styled.span`
//     height: 4px;
//     width: 100%;
//     background-color: #ffff;
    /* &:nth-child(1) {
        transform: rotate(-70deg);
        transform-origin:   right;

    }
    &:nth-child(2) {
        display: none;
    }
    &:nth-child(3) {
        transform: rotate(70deg);
        transform-origin:   right;
    } */
`