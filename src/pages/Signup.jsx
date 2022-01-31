import styled from "styled-components";
import FormSignup from "../components/forms/FormSignup";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Video = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`
const Signup = () => {
    return (
        <Container>
            <Video autoPlay muted loop >
                <source src="/assets/videoBackground.mp4" type="video/mp4"/>
            </Video>
            <FormSignup/>
        </Container>
    )
};

export default Signup;
