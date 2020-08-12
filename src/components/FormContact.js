import React from 'react';

import Axios from 'axios';

import { createRedirect } from 'gatsby-plugin-client-side-redirect';
//import Formik & yup
import  { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const FormContact = () => {

 
    return (

        <Formik


            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            }}

            validationSchema={Yup.object({

                firstName: Yup
                    .string()
                    .trim()
                    .ensure('Le champ est vide')
                    .required('Champ obligatoire'),

                lastName: Yup
                    .string()
                    .trim()
                    .ensure('Le champ est vide')
                    .required('Champ obligatoire'),

                email: Yup
                    .string()
                    .trim()
                    .ensure('Le champ est vide')
                    .email('Adresse non valide')
                    .required('Champ obligatoire'),

                message: Yup
                    .string()
                    .trim()
                    .ensure('Le champ est vide')
                    .required('Champ obligatoire'),
            })}

            onSubmit={ (values, {setSubmitting, resetForm}) => {

                setSubmitting(false);

                Axios.post('https://getform.io/f/68cc8f68-0e31-4b1b-bff5-cbac61235ef5', values)
                .then((response)=> {

                    console.log(response);

                    resetForm({ values: '' });

                    if(typeof window !== 'undefined') {
                        console.log('test function');
                        return window.location.href = 'http://localhost:8000/sendMessage';
                    }

                }).catch(( error )=>{

                    return error;
                })
            }}
        >
            <Form name="contact" method="POST" data-netlify="true">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">Nom</label>
                        <Field type="text" className="form-control" id="firstName" name="firstName"/>
                        <span className="alert-error"><ErrorMessage name="firstName" /></span>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Prénom</label>
                        <Field type="text" className="form-control" id="lastName"  name="lastName" />
                        <span className="alert-error"><ErrorMessage name="lastName"/></span>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="InputEmail">email</label>
                    <Field type="email" className="form-control" id="email" name="email" />
                    <span className="alert-error"><ErrorMessage name="email" /></span>
                </div>
                <div className="form-group">
                    <label htmlFor="inoutMessage">message</label>
                    <Field component="textarea" className="form-control" id="message" rows="3" name="message" />
                    <span className="alert-error"><ErrorMessage name="message" /></span>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </Form>
        </Formik>
    )
}

export default FormContact;