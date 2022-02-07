import React from 'react';
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns ? props.gridTemplateColumns : "repeat(3, minmax(280px, 1fr))"};
  grid-gap : ${(props) => props.gridGap ? props.gridGap : "50px"};
  align-items: ${(props) => props.alignItems ? props.alignItems: "stretch"};`

const GridContainerProduct = ({children, gridTemplateColumns, gridGap, alignItems}) => {
    return (
        <Grid
            gridTemplateColumns = {gridTemplateColumns}
            gridGap = {gridGap}
            alignItems = {alignItems}
        >
            {children}
        </Grid>
    )
    
};

export default GridContainerProduct;