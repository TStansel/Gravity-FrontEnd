import Card from "../shared/Card";
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from "react";
import QuestionsContext from "../../context/QuestionsContext";

const Question = ({question}) => {
  const {deleteQuestion, editQuestion} = useContext(QuestionsContext);

  return (
    <Card>
      <button onClick={() => deleteQuestion(question.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editQuestion(question)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{question.question_text}</div>
    </Card>
  )
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
}

export default Question;