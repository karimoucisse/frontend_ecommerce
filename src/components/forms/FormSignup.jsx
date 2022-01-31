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
    height: 600px;
    width: 40%;
    gap: 20px;
    border-radius: 20px;
    position: absolute;
    z-index: 3;
`
const FormSignup = () => {
    return (
        <FormContainer>
            <Input
                placeholder="prénom"
                type= "text"
            />
            <Input
                placeholder= "nom"
                type= "text"
            />
            <Input
                placeholder= "date de naissance"
            />
            <Input
                placeholder= "Email"
            />
            <Input
                placeholder= "Password"
                type= "password"
            />
            <Input
                placeholder= "telephone"
            />
            <Input
                placeholder= "address"
                type= "text"
            />
            <Button>Signup</Button>
        </FormContainer>
    )
};

export default FormSignup;
