import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = styled.main`
    display: flex;
    justify-content: center;
    display: flex;
    height: 100vh;
    width: 100vw;
    position: relative;
    margin-bottom: -3% ;
`

const MainTitle = styled.h1`
    color: #f8edeb;
    position: absolute;
    align-items: center;
    align-self: center;
    font-size: 80px;
    top: 70%;
    left: 50%;
`
const Title = styled.h1`
    color: #f8edeb;
    position: absolute;
    align-items: center;
    align-self: center;
    font-size: 80px;
    top: 10%;
    left: 50%;

`
const NotFound = () => {
    return (
        <>
            <Header />
            <Container>
                <Title> 404 Not Found</Title>
                <img src ="https://tinyurl.com/y2fshhtu" alt="Pecheur" style={{height:"100"}}></img>
                <MainTitle>No fish in this fishing area .</MainTitle>
            </Container>
            <Footer />
        </>

    );
};

export default NotFound