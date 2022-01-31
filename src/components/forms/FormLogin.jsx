import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: 400px;
    width: 35%;
    gap: 70px;
    border-radius: 20px;
`
const FormLogin = () => {
  return (
        <FormContainer>
            <Input
                placeholder="@Mail"
            />
            <Input
                placeholder= "Password"
            />
            <Button>Login</Button>
        </FormContainer>
    )
  
};

export default FormLogin;
