import styled from "styled-components";
const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Element = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-top: 3px solid #023047;
    animation: loading 3s linear infinite;
    @keyframes loading {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(1turn);
        }
    }
`
const Loading = () => {
  return (
    <Container>
        <Element></Element>
    </Container>
  )
};

export default Loading;
