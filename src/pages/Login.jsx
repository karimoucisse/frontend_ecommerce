import FormLogin from "../components/forms/FormLogin";
import Container from "../components/Container";
import WavesAnimation from "../components/WavesAnimation";

const Login = () => {
    return (
        <Container 
            display= "flex" 
            position= "relative"
            backGroundColor= "#023047"
        >
            <FormLogin/>
            <WavesAnimation/>
        </Container>
    )
};

export default Login;
