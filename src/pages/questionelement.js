import React from 'react';
import Header from '../components/QuestionsPage/Header';
import QuestionForm from '../components/QuestionsPage/QuestionForm';
import QuestionStats from '../components/QuestionsPage/QuestionStats';
import QuestionsList from '../components/QuestionsPage/QuestionsList';
import { QuestionsProvider } from '../context/QuestionsContext';
import Icon from '../components/shared/Icon';
import styled from 'styled-components';

const Questions = () => {
  return (
    <Container>
        <QuestionsProvider>
          <Icon to={"/"} text={'gravity'}></Icon>
          <Header />
          <FAQWrap>
            <QuestionForm/>
            <QuestionStats/>
            <QuestionsList/>
          </FAQWrap> 
        </QuestionsProvider>
    </Container>
  ) 
}

const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--background-primary);
`;

const FAQWrap = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 20px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export default Questions;