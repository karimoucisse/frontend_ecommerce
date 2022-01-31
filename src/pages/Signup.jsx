import styled from "styled-components";
import FormSignup from "../components/forms/FormSignup";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #023047;
`
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
        <Container>
            <FormSignup/>
            {/* <Video autoPlay muted loop >
                <source src="/assets/videoBackground.mp4" type="video/mp4"/>
            </Video> */}
        </Container>
    )
};

export default Signup;
