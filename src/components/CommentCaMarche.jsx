import Section from "./Section";
import styled from "styled-components";

const DescriptionRow = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-around;
    padding: 40px 20px;
    background-color: #ffff;
    gap: 20px;

`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: auto;
`
const Logo = styled.i`
    font-size: 70px;
    color: rgb(149,165,166);
`
const Paragraph = styled.p`
    font-size: 17px;
    font-weight: 500;
`

const CommentCaMarche = () => {
    return (
        <Section>
            <h1>Comment ça marche ?</h1>
            <DescriptionRow justifyContent= "space-around">
                <LogoContainer>
                    <Logo className="fas fa-truck"></Logo>
                    <Paragraph>
                        Vous êtes livrés en 24h avec ChronoFresh <br/>
                        afin de conserver la chaîne du froid
                    </Paragraph>
                </LogoContainer>
                <LogoContainer>
                    <Logo className="fas fa-fish"></Logo>
                    <Paragraph>Pêche en provenance de nos côtes <br/> normandes et Atlantique ouest.</Paragraph>
                </LogoContainer>
                <LogoContainer>
                    <Logo className="fas fa-credit-card"></Logo>
                    <Paragraph>Notre site de vente en ligne est 100% <br/> sécurisé et toutes les données sont cryptées</Paragraph>
                </LogoContainer>
            </DescriptionRow>
        </Section>
    )
};

export default CommentCaMarche;
