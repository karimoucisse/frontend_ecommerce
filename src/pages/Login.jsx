import styled from "styled-components";
import Form from "../components/Form";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Login = () => {
    return (
        <Container>
            <Form/>
        </Container>
    )
};

export default Login;
