// Description.js

import { useNavigate, useParams } from "react-router-dom";
import { useQuizId } from "../Quiz/useQuizId";
import { useDispatch } from "react-redux";
import { active, clear } from "../Quiz/QuizSlice";
import AppLayouts from "../../ui/AppLayouts";

function Description() {
  const { id } = useParams();
  const { Quiz } = useQuizId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionsLength = Quiz?.Quiz.questions?.length || 0;
  function handleClick(e) {
    e.preventDefault();
    dispatch(clear())
    dispatch(active(Quiz?.Quiz))
    navigate(`/questions/${id}`);
  }
  return (
    <>
      <AppLayouts>
        <div className="flex justify-center items-center max-md:flex-col max-md:text-center max-[873px]:flex-col">
          <img
            className=" w-[15rem]"
            src='/QuizPng.png'
            alt="Your Company"
          />
          <h1 className="text-[6rem] mr-[2rem] bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text max-md:text-[3rem]">The Gadri Quiz</h1>
        </div>
        <div className="flex flex-col justify-center items-center max-md:flex-col max-md:text-center">
          <h2 className="text-[2.5rem] mb-8 font-bold max-md:text-[1.5rem] max-md:mt-[1rem]">Welcome to {Quiz?.Quiz.title}</h2>
          <h3 className="text-2xl mb-[4rem]">{questionsLength} questions {Quiz?.Quiz.description}</h3>
          <button className="border px-6 py-3 rounded-2xl font-bold text-xl hover:bg-gray-800" onClick={handleClick}>Lets start</button>
        </div>
      </AppLayouts>
    </>
  );
}

export default Description;
