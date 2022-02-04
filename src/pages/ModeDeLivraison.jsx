import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Picker from '../components/Picker';
import styled from 'styled-components';  
import Card from '../components/Card';
import Button from '../components/Button';
import Row from '../components/Row'; 
// import getCard from '../api/getCard';
// import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import { useFormik } from 'formik';
import { CartContext } from '../context/Cart';

const Style = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top: 10%;   
`
const Alignement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10%;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:  10%; 
`
const Input = styled.div`
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
`
const Text = styled.div`
    font-weight: bold;
    font-size: large;
    margin: 50px 15px 0px 25px;
`
const Title= styled.div`
    font-weight: bold;
    font-size: large;
    margin: 50px 15px 0px 25px;
    padding-left: 40%;
    justify-content: center;
  `
  const CalendarStyle= styled.div`
    display: flex ;
    justify-content: center;
    margin-bottom: 5%;

`
const SelectTime= styled.div`
    width: 15%;
    height:15% ;
    margin: 5%;
` 


const ModeDeLivraison = () => {
    const { cart } = useContext(CartContext)
    console.log(cart ,'wchla mif');

    // const paymentCart  = cart.lineItems.map(item => {
    //     if(cart) {
    //         return (<div>
    //             <h4>{item.product}</h4>
    //             <h4>{item.quantity}</h4>
    //             <h4>{item.weight}</h4>
    //             <h4>{item.totalPrice}</h4>
    //         </div>)
    //     }
    // })

    // console.log(paymentCart)
    //     p 
    // }) 
    // return paymentCart
    //    console.log(paymentCart);
    // {cart.map((listCart , rowIndex) => {
    //     return listCart.map 
        
       
      
    // })}

                    //     var numbers = [1, 2, 3, 4];
                    // var new_numbers = numbers.map(function(number){
                    // return number * 2;
                    // }).map(function(number){
                    // return number++;
                    // });
                    // console.log"Les nombres doublés et incrémentés sont",
                   
                    {console.log(cart)};
    
 return (
        <div>
            <Header/>
                <Title><h2>Mode de Livraison</h2> </Title>
                    <form>
                        <Style>
                            <Card  marginTop="10%" width="500px" flex-direction= "column" background="#a3c4f3"> 
                                <Form>
                                    <Input> 
                                        <input type="radio"  name="rad" value="Livraison by Chronofresh "/> 
                                    </Input>
                                        <Text>
                                            <h2><label for="subscribeNews">Livraison by Chronofresh </label> </h2>
                                                <br/>
                                                    <p>Livraison à domicile en 24/48h pour toute commande  passée avant 10h</p>    
                                                        <span>15€ TTC</span>
                                        </Text>
                                </Form>   
                                    <img 
                                        src = "https://tinyurl.com/yckw5h4x" 
                                        alt="popo "
                                        style={{ height:"250px" ,marginTop:"80px"}}/>
                            </Card>
                            <Card marginTop="10%" width="500px" flex-direction= "column" background="#a3c4f3">
                                <Form> 
                                    <Input>
                                        <input type="radio" name="rad" value="So Fresh"/> 
                                    </Input>
                                        <Text> 
                                            <h2><label for="subscribeNews">Livraison by Sofresh </label></h2>
                                                <br/>
                                                    <p>Points relais frais à Paris
                                                    domicile en 24/48h 
                                                    pour toute commande 
                                                    passée avant 10h
                                                    </p>
                                                        <span> 18.60€ TTC</span>
                                        </Text>
                                </Form>         
                                                <img 
                                                src = "https://tinyurl.com/2p8r9frh" 
                                                alt="popo "
                                                style={{ height:"200px" ,marginTop:"100px"}}/>
                            </Card> 
                        </Style> 
                    </form>
                        <Alignement> 
                                    <h2><label for="name">Si vous voulez nous laisser un message à propos de votre commande, merci de
                                    bien vouloir le renseigner dans le champ ci-contre.
                                    </label> </h2> 
                                    <textarea id="story" name="story"
                                    rows="5" cols="33">
                                    Message à propos de votre commande...
                                    </textarea>
                        </Alignement>  
                            <CalendarStyle>
                                <Picker/>
                                    <SelectTime>      
                                        <h3><label for="appt"> Choisisez votre heure de Livraison </label>
                                            <input type="time" id="appt" name="appt"  
                                                min="09:00" max="13:00" required/> 
                                                    <small>9h00-13h00</small>     </h3>  
                                    </SelectTime> 
                            </CalendarStyle>
                                <Row alignItems="center" >
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis veniam culpa porro pariatur debitis perferendis impedit quis tenetur?
                                    Maiores commodi repellat a incidunt molestias quasi ratione,
                                    esse modi nobis at.</p>
                                    <Button background= "endregion"  height="100px" width="200px" margin="150px 40px 30px 80px" >Payer</Button> 
                            </Row>
                            {cart && cart.map(element => (
                                element.lineItems.map(item => (
                                    <div>
                                        <h4>PrixKilo: {item.product.kiloPrice}</h4>
                                        <h4>Conditionnement: {item.product.conditioning}</h4>
                                        <h4>Zone de pêche: {item.product.fishingArea}</h4>
                                        <h4>Poids Net: {item.product.netWeight}</h4>
                                        <h4>Prix à la piéce {item.product.pricePerPiece}</h4>
                                        <h4>Prix au Kilo: {item.product.kiloPrice}</h4>
                                        <h4>Quantitée: {item.quantity}</h4>
                                        <h4>Poids total: {item.weight}</h4>
                                        <h4>Total Pièces: {item.totalPrice}</h4>
                                    </div>
                                        
                                )) 
                           
                            ))
                            
                            }
                        <Footer/>
        </div>
    );
};

export default ModeDeLivraison;