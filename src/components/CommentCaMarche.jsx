import Section from "./Section";
import styled from "styled-components";

const DescriptionRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 40px 0;
    background-color: #ffff;
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
            <h1>comment ça marche</h1>
            <DescriptionRow justifyContent= "space-around">
                <LogoContainer>
                    <Logo className="fas fa-truck"></Logo>
                    <Paragraph>
                        Vous êtes livré en 24h avec ChronoFresh <br/>
                        afin de conserver la chaîne du froid
                    </Paragraph>
                </LogoContainer>
                <LogoContainer>
                    <Logo className="fas fa-fish"></Logo>
                    <Paragraph>Pêche en provenance de nos côtes <br/> normandes et atlantique ouest.</Paragraph>
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
