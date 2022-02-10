import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 0 70px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MarginContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MarginContainer;
