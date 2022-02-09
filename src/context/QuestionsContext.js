import { createContext, useEffect, useState } from "react";
import { ulid } from "ulid";
import axios from 'axios';
import moment from "moment";


// create the global context from the questions
const QuestionsContext = createContext()

export const QuestionsProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);

  const [questions, setQuestions] = useState([]);

  //edit feedback
  const [questionEdit, setQuestionEdit] = useState({
    item: {},
    edit: false,
  })

  //the useEffect hook will run right after the component is rendered
  // the second argument is an array of dependencies, it will compare the current render
  // to the previous render and run again if any changes
  // if you only want to run once, pass in an empty array.
  useEffect(() => {
    getQuestions();
  }, [])

  const getQuestions = async () => {
    // axios.get('http://localhost:4000/feedback')
    //   .then(res => {
    //     const questions = res.data;
    //     setQuestionEdit(questions);
    //     setIsLoading(false);
    //   })

    const response = await fetch(`http://localhost:4000/feedback`)
    const data = await response.json();
    setQuestions(data);
    setIsLoading(false);
    
  }

  // set question to be updated
  const editQuestion = (question) => {
    setQuestionEdit({
      question,
      edit: true
    })
  }

  // update question
  const updateQuestion = (id, updQuestion) => {
    setQuestions(questions.map((question) => question.id === id ? { ...question, ...updQuestion } : question))
  }

  const deleteQuestion = (id) => {
    if(window.confirm('Are you sure that you want to delete this question?')) {
      setQuestions(questions.filter((question) => question.id !== id));
    }
  }

  const addQuestion = (newQuestion) => {
    newQuestion.id = ulid();
    newQuestion.time_stamp = moment().format('YYYY-DD-MM h:mm:ss');
    setQuestions([newQuestion, ...questions]);
    console.log(questions);
  }

  return <QuestionsContext.Provider value={{
    questions,
    deleteQuestion,
    addQuestion,
    editQuestion,
    isLoading,
    questionEdit,
    updateQuestion,
  }}>{children}</QuestionsContext.Provider>
}

export default QuestionsContext;

