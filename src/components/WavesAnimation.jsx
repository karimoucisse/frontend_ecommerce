import styled from "styled-components"

const Waves1 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(assets/wave.png);
    background-size: 1000px 100px;
    animation: animate 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0;
    @keyframes animate {
        0% {background-position-x: 0};
        100% {background-position-x: 1000px}
    }

`
const Waves2 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(assets/wave.png);
    background-size: 1000px 100px;
    animation: animate2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
    @keyframes animate2 {
        0% {background-position-x: 0};
        100% {background-position-x: -1000px}
    }

`
const Waves3 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(assets/wave.png);
    background-size: 1000px 100px;
    animation: animate3 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
    @keyframes animate3 {
        0% {background-position-x: 0};
        100% {background-position-x: 1000px}
    }

`
const Waves4 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(assets/wave.png);
    background-size: 1000px 100px;
    animation: animate4 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
    @keyframes animate4 {
        0% {background-position-x: 0};
        100% {background-position-x: 1000px}
    }

`
const Image = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
`
const WavesAnimation = () => {
    return (
        <>
            <Waves1></Waves1>
            <Waves2></Waves2>
            <Waves3></Waves3>
            <Waves4></Waves4>
            <Image src= "/assets/pecheur.png"/>
        </>
    )
};

export default WavesAnimation;
