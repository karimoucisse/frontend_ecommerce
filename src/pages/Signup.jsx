import styled from "styled-components";
import FormSignup from "../components/forms/FormSignup";
import Container from "../components/Container";

const Video = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
`
const Signup = () => {  
    return (
        <Container display = "flex">
            <FormSignup/>
            {/* <Video autoPlay muted loop >
                <source src="/assets/videoBackground.mp4" type="video/mp4"/>
            </Video> */}
        </Container>
    )
};

export default Signup;
