import React from 'react';
import Container from '../components/Container';
import Header from "../components/Header";
import Image from '../components/Image';
import Row from '../components/Row';
import Input from '../components/Input';
import Footer from '../components/Footer'
// import FormContact from '../components/forms/FormContact';
import styled from 'styled-components';

const DivInput = styled.div`
   flex-direction: ${(props) => props.flexDirection ? props.flexDirection : "column"};
   width: ${(props) => props.width ? props.width : "400px"};
   padding: ${(props) => props.padding ? props.padding : "10px"};
   margin: ${(props) => props.margin ? props.margin : "10px"};
   i{
    margin-left: 25px;
   }
`
const Form =styled.form`
    display: flex;
    align-items: center;
`
const DivForm = styled.div`
    width: 100%;
`
const ButtonForm = styled.button`
    width: ${(props) => props.width ? props.width : "80px"};
    height: ${(props) => props.height ? props.width :"30px" };
    background-color: #07137a;
`
const TextBut = styled.text`
    color: white;
`
const Para = styled.p`
    margin-left: 10px;
`
const Contacter = () => {
    return (
        <Container>
            <Header/>
            <Row justifyContent="center">
                <Image source="https://cdn.discordapp.com/attachments/930830438644187139/937708608345473075/premium_bacalao.png"/>
            </Row>
            <DivForm>
                <Form>
                    <DivInput width="500px">
                        <Input  margin="30px" type="text" placeholder="Nom"/>
                        <Input  margin="30px" type="text" placeholder="E-mail"/>
                        <Input  margin="30px" type="text" placeholder="Numéro de téléphone"/>
                    </DivInput>
                    <DivInput width="600px" margin="28px">
                        <Para>Comment pouvons-nous vous aider ?</Para>
                        <Input height="200px"  margin="10px" padding="" type="text"/>
                    </DivInput>
                    <ButtonForm> <TextBut>Envoyer</TextBut></ButtonForm>
                </Form>
                    <DivInput flexDirection="row" >
                        <i class="fas fa-phone-volume">  06-60-50-30-45</i><br/><br/>
                        <i class="fas fa-envelope"> saveur-de-la-mer@gmail.fr </i>
                    </DivInput>
            </DivForm>
            <Footer/>
        </Container>
    );
};

export default Contacter;