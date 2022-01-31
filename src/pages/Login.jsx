import styled from "styled-components";
import FormLogin from "../components/forms/FormLogin";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #023047;
`
const Login = () => {
    return (
        <Container>
            <FormLogin/>
        </Container>
    )
};

export default Login;
