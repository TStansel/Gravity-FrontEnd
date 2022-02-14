import React from 'react';
import Card from '../shared/Card';
import { useState, useContext, useEffect } from 'react';
import Button from '../shared/Button';
import QuestionsContext from '../../context/QuestionsContext';

const QuestionForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const {addQuestion, questionEdit, updateQuestion} = useContext(QuestionsContext);

  useEffect(() => {
    if(questionEdit.edit === true) {
      setBtnDisabled(false);
      setText(questionEdit.question.question_text);
    }
  }, [questionEdit])

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true);
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newQuestion = {}
    if(text.trim().length > 10) {
      newQuestion = {
        question_text: text,
      }
    }

    if(questionEdit.edit === true) {
      updateQuestion(questionEdit.question.id, newQuestion)
    } else {
      addQuestion(newQuestion);
    }
    setText('');
    setBtnDisabled(true);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>New Question Form</h2>
        <div className='input-group'>
          <input type='text' placeholder='Leave a new question here' onChange={handleTextChange} value={text}/>
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default QuestionForm;