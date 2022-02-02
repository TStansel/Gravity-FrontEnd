import React from 'react';
import emailjs from '@emailjs/browser';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from './DemoElements';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';


const DemoForm = () => {
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    sendEmail(event);
    navigate('/thankyou');
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9tesnqq', 'template_7ir6ouo', e.target, 'user_dfHRosNhs0RFPoLa5o4So')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();

  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">gravity</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Get Demo </FormH1>
              <FormLabel htmlFor='firstname'>First Name</FormLabel>
              <FormInput  required id="firstname" name='firstname'/>
              <FormLabel htmlFor='for' name='lastname'>Last Name</FormLabel>
              <FormInput required id='lastname' name='lastname'/>
              <FormLabel htmlFor='for' name='email'>Email</FormLabel>
              <FormInput type='email' id='email' name='email' required />
              <FormLabel htmlFor='for'>Company Name</FormLabel>
              <FormInput required id='company' name='company'/>
              <FormButton type='submit'>Let's Chat</FormButton>
              {/* <Text>Forgot Password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default DemoForm;
