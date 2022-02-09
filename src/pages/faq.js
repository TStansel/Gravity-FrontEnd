import React from 'react';
import Header from '../components/QuestionsPage/Header';
import QuestionForm from '../components/QuestionsPage/QuestionForm';
import QuestionStats from '../components/QuestionsPage/QuestionStats';
import QuestionsList from '../components/QuestionsPage/QuestionsList';
import { QuestionsProvider } from '../context/QuestionsContext';

const Questions = () => {
  return (
    <>
    <h1> Love it</h1>
    <QuestionsProvider>
       <Header />
       <div className='container'>
         <QuestionForm/>
         <QuestionStats/>
     <QuestionsList/>
      </div>
    </QuestionsProvider>
    </>
  ) 
}

export default Questions;