import styled from 'styled-components';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Input from './Input'

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 280px;
    position: absolute;
    top: 55px;
    right: 100px;
    height: 35px;
    z-index: 1;
    background-color: #ffff;
    gap: 10px;
    transform: ${(props) => props.isVisible ? "scaleY(1)" : "scaleY(0)" } ;
    transform-origin: top;
    transition: all .2s ease-in-out;
`
const ZoomLogo = styled(ZoomOutIcon)`
    color: black;
`
const Search = ({isVisible}) => {
    return (
        <SearchContainer isVisible= {isVisible}>
            <Input 
                type="text" 
                width= "100%" 
                height= "100%" 
                border="none" 
                placeholder= "Search" 
                padding= "0 0 0 5px"
            />
            <ZoomLogo/>
        </SearchContainer>
    )
};

export default Search;
