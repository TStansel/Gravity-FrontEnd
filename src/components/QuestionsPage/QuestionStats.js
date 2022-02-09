import React from 'react';
import { useContext } from 'react';
import QuestionsContext from '../../context/QuestionsContext';


const QuestionStats = () => {
  const {questions} = useContext(QuestionsContext);

  return (
    <div className='feedback-stats'>
      <h4>{questions.length} Questions</h4>
    </div>
  )
}

export default QuestionStats