import styled from "styled-components";
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.height ? props.height : "100vh"};
`
const Element = styled.div`
    width: 150px;
    height: 150px;
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
    </Container>
  )
};

export default Loading;
