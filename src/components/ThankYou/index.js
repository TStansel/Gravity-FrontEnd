import React from 'react';
import { Container, ThankYouWrap, Icon, Content, ThankYouH1, Text} from './ThankYouElements';


const ThankYouMessage = () => {
    return (
    <>
      <Container>
        <ThankYouWrap>
          <Icon to="/">gravity</Icon>
          <Content>
            <ThankYouH1>Thank You!</ThankYouH1>
            <Text>A member of our support team will be in touch for a demo soon.</Text>
          </Content>
        </ThankYouWrap>
      </Container>
    </>
  );
};

export default ThankYouMessage;
