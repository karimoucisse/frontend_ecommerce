import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Picker from '../components/Picker';
import styled from 'styled-components';  
import Card from '../components/Card';

 
const Style = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content:space-around;
    margin-top: 10%;
`

const Alignement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:  10%;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:  10%;
`
const Text = styled.div`
    font-weight: bold;
    font-size: large;
    margin: 50px 15px 0px 25px;
`

const ModeDeLivraison = () => {
    return (
        <div>
            <Header/>
                <h2>Mode de Livraison</h2>
                <Style>
                    
                    <form>
                        
                            <Card  marginTop="10%" width="500px" flex-direction= "column" background="#0a9396"> 
                                <Form>
                                <input type="radio"  name="subscribe" value="Livraison by Chronofresh "/>
                                    
                                        <Text>
                                        <h2><label for="subscribeNews">Livraison by Chronofresh </label> </h2>
                                        <p>Livraison à domicile en 24/48h 
                                            pour toute commande 
                                            passée avant 10h
                                        </p>    
                                            <span>15€ TTC</span>
                                            </Text>
                                            </Form>   
                                      <div>
                                      <img 
                                      src = "https://tinyurl.com/yckw5h4x" 
                                      alt="popo "
                                      style={{ height:"250px" ,marginTop:"80px"}}/>
                                      </div>
                            </Card>
                    </form>
                    <form>
                        
                        <Card marginTop="10%" width="500px" flex-direction= "column" background="#0a9396">
                            <Form>  
                                <input type="radio" />
                                    <label for="subscribeNews">Livraison by Sofresh </label>
                                        <p>Points relais frais à Paris</p>
                                            <span> 18.60€ TTC</span>
                            </Form>                
                        </Card> 
                     </form>
                     </Style>  
                        <Alignement> 
                            <label for="name">Si vous voulez nous laisser un message à propos de votre commande, merci de
                                    bien vouloir le renseigner dans le champ ci-contre.
                            </label>
                                <textarea id="story" name="story"
                                    rows="5" cols="33">
                                        Message à propos de votre commande...
                                </textarea>
                        </Alignement>    
                        <Picker/>
                        <Footer/>
        </div>
    );
};

export default ModeDeLivraison;