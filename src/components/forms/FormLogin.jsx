import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UserContext } from "../../context/User";
import { useContext, useState} from "react";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: 400px;
    width: 550px;
    gap: 50px;
    border-radius: 20px;
    position: relative;
    z-index: 3;
`
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
`
const ErrorMessage = styled.p`
    color: red;
    animation: blink 1s linear infinite;
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`
const Logo = styled.i`
    position: absolute;
    height: 100%;
    right: 80px;
    top: 10px;
    /* bottom: 0; */
    font-size: 22px;
    cursor: pointer;
    margin: auto;
    color: rgba(0, 0, 0, 0.5);
    transition: all ease-in-out 0.2s;
    &:hover {
        color: rgb(0, 0, 0);
    }
`

const FormLogin = () => {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)

    const formik = useFormik({
        initialValues: {
            email: "marco-pereira@hotmail.fr",
            password: "karimou",
        },

        onSubmit: async values => {
            login(values)
        },

        validateOnChange: false,
        validationSchema: Yup.object({
            
            password: Yup.string()
                .required("Mot de passe est requis"),
            email: Yup.string()
                .email("Email est incorrecte")
                .required("email est requis")
        })
    })

    const login = async values => {
        const response = await fetch ('http://localhost:5000/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            alert("Error")
        } else {
            const userLogged = await response.json()
            // setUser(userLogged)
            navigate('/')
        }
    }
    console.log(user);

  return (
        <FormContainer 
            onSubmit={formik.handleSubmit}
        >
            <InputContainer>
                <Input
                    placeholder="Email"
                    type= "text"
                    name= "email"
                    value= {formik.values.email}
                    onChange={formik.handleChange}
                    border = {formik.errors.email ? "2px solid red" : false}
                />
                {formik.errors.email && <ErrorMessage>{formik.errors.email}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder= "Password"
                    type= {isHidden ? "password" : "text"}
                    name= "password"
                    value= {formik.values.password}
                    onChange={formik.handleChange}
                    border = {formik.errors.password ? "2px solid red" : false}
                />
                <Logo 
                    className={ !isHidden ? "fas fa-eye" : "fas fa-eye-slash"}
                    onClick={() => setIsHidden(!isHidden)}
                />
                {formik.errors.password && <ErrorMessage>{formik.errors.password}</ErrorMessage>}
            </InputContainer>
            
            <Button padding= "10px 100px" type= "submit">Login</Button>
        </FormContainer>
    )
  
};

export default FormLogin;
