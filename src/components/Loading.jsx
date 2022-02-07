import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.height ? props.height : "100vh"};
`
const Element = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-top: 4px solid #023047;
    animation: loading 1.2s linear infinite;
    @keyframes loading {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(1turn);
        }
    }
`
const Loading = ({height}) => {
  return (
    <Container height= {height}>
        <Element></Element>
        <h3>chargement ...</h3>
    </Container>
  )
};

export default Loading;
