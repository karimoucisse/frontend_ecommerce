import Header from "../components/Header";
import BackGroundImage from "../components/BackGroundImage";
import styled from "styled-components";

const BackgroundTitle = styled.h2`
    position: absolute;
    color: #ffff;
    top: 40vh;
    left: 10vw;
    transform: rotate(-30deg);
    font-size: 45px;
    font-family: "Risque";
`
const Home = () => {
  return <div>
            <Header/>
            <BackGroundImage 
                src= " https://cdn.discordapp.com/attachments/930830438644187139/935859036165914664/vignette-focus.png" 
                alt= "homepage fish"
            />
            <BackgroundTitle>Saveur d'autre mer</BackgroundTitle>
        </div>;
};

export default Home;
