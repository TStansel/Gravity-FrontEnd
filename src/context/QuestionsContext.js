import { createContext, useEffect, useState } from "react";
import { ulid } from "ulid";
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
    const response = await fetch(`/question_data`)
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
  const updateQuestion = async (id, updQuestion) => {
    const response = await fetch(`/question_data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'applications/json',
      },
      body: JSON.stringify(updQuestion)
    })

    const data = response.json();

    setQuestions(questions.map((question) => question.id === id ? { ...question, ...data } : question))
  }

  const deleteQuestion = async (id) => {
    if(window.confirm('Are you sure that you want to delete this question?')) {
      await fetch(`/question_data/${id}`, { method: 'DELETE'});
      setQuestions(questions.filter((question) => question.id !== id));
    }
  }

  const addQuestion = async (newQuestion) => {
    newQuestion.id = ulid();
    newQuestion.time_stamp = moment().format('YYYY-DD-MM h:mm:ss');
    console.log(newQuestion);
    const response = await fetch(`/question_data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion),
    })

    const data = await response.json();
    setQuestions([data, ...questions])
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

