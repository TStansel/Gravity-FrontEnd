import Question from "./Question";
import {motion, AnimatePresence} from 'framer-motion';
import {useContext} from 'react';
import QuestionsContext from "../../context/QuestionsContext";
import Spinner from "../shared/Spinner";

const QuestionList = () => {
  const { questions, isLoading } = useContext(QuestionsContext);

  if(!isLoading && (!questions || questions.length === 0)) {
    return <p>No Questions Yet</p>
  }

  return isLoading ? <Spinner/> : (<div className="feedback-list">
    <AnimatePresence>
      {questions.map((question) => (
        <motion.div
          key={question.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
          <Question key={question.id} question={question}/>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>);
};

export default QuestionList;