import React from 'react';
import { Form } from './FormContact.style'
import Input from '../Input';
const FormContact = () => {
    return (
        <Form>
            <Input margin="10px" type="text" placeholder="Nom"/>
            <Input margin="10px" type="text" placeholder="E-mail"/>
            <Input margin="10px" type="text" placeholder="Numéro de téléphone"/>
        </Form>
    );
};

export default FormContact;