import FormSignup from "../components/forms/FormSignup";
import Container from "../components/Container";
import WavesAnimation from "../components/WavesAnimation";

const Signup = () => {  
    return (
        <Container 
            display = "flex" 
            position= "relative"
            backGroundColor= "#023047"
            alignItems= "flex-start"
            padding= "20px 0"
        >
            <FormSignup/>
            <WavesAnimation/>
        </Container>
    )
};

export default Signup;
