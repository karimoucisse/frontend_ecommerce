import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { UserContext } from "../../context/User";
import { useContext } from "react";
import { useNavigate } from 'react-router';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: 600px;
    padding: 10px 0;
    width: 550px;
    gap: 15px;
    border-radius: 20px;
    position: relative;
    z-index: 3;
`
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const ErrorMessage = styled.p`
    color: red;
    animation: blink 1.7s linear infinite;
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }
`
const FormSignup = () => {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName:"",
            name: "",
            birthDate:"",          
            email:"",
            password:"",
            phoneNumber:"",
            adress:"",
        },
        onSubmit: values => {
            console.log(values);
            // signup(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            firstName: Yup.string()
            .required("Le prénom est requis"),
            name: Yup.string()
            .required("Le nom est requis"),
            birthDate: Yup.string()
            .required("la date de naissance est requise"),
            email: Yup.string()
            .email("Email est incorrecte")
            .required("email est requis"),
            password: Yup.string()
            .min(6, "Mot de passe trop court")
            .required("mot de passe requis"),
            phoneNumber: Yup.string(),
            adress: Yup.string()
            .required("l'adresse est requis"),
            
        })
    })

    // const signup = async values => {
    //     const response = await fetch ('http://localhost:5000/auth/signup', {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         credentials: 'include',
    //         body: JSON.stringify(values)
    //     })
    //     if(response.status >= 400) {
    //         alert("Error, this mail already exist")
    //     } else {
    //         const userLogged = await response.json()
    //         setUser(userLogged)
    //         navigate('/')
    //     }
    // }
    return (
        <FormContainer 
            onSubmit={formik.handleSubmit}
        >
            <InputContainer>
                <Input
                    placeholder="prénom"
                    type= "text"
                    name="firstName"
                    value= {formik.values.firstName}
                    onChange={formik.handleChange}
                    border = {formik.errors.firstName ? "2px solid red" : false}
                />
                {formik.errors.firstName && <ErrorMessage>{formik.errors.firstName}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder= "nom"
                    type= "text"
                    name= "name"
                    value= {formik.values.name}
                    onChange={formik.handleChange}
                    border = {formik.errors.name ? "2px solid red" : false}
                />
                {formik.errors.name && <ErrorMessage>{formik.errors.name}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder= "date de naissance"
                    name = "birthDate"
                    value= {formik.values.birthDate}
                    onChange={formik.handleChange}
                    border = {formik.errors.birthDate ? "2px solid red" : false}
                />
                {formik.errors.birthDate && <ErrorMessage>{formik.errors.birthDate}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder= "Email"
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
                    type= "password"
                    name= "password"
                    value= {formik.values.password}
                    onChange={formik.handleChange}
                    border = {formik.errors.password ? "2px solid red" : false}
                />
                {formik.errors.password && <ErrorMessage>{formik.errors.password}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder= "telephone"
                    name= "phoneNumber"
                    value= {formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    border = {formik.errors.phoneNumber ? "2px solid red" : false}
                />
                {formik.errors.phoneNumber && <ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder= "address"
                    type= "text"
                    name= "adress"
                    value= {formik.values.adress}
                    onChange={formik.handleChange}
                    border = {formik.errors.adress ? "2px solid red" : false}
                />
                {formik.errors.adress && <ErrorMessage>{formik.errors.adress}</ErrorMessage>}
            </InputContainer>
            <Button type= "submit">Signup</Button>
        </FormContainer>
    )
};

export default FormSignup;
