import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';

const SignIn = () => {
  const handleSubmit = (event) => {
    alert('A form was submitted: ');
  };


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">gravity</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Get Demo </FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
              <FormInput  required />
              <FormLabel htmlFor='for'>Last Name</FormLabel>
              <FormInput required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Company</FormLabel>
              <FormInput required />
              <FormButton type='submit'>Let's Chat</FormButton>
              {/* <Text>Forgot Password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
