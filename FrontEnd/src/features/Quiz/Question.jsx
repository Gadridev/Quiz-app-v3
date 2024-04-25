import { useDispatch, useSelector } from "react-redux";
import Options from "../../ui/Options";
import NextQuestion from "../../ui/NextQuestion";
import ProgressPoint from "../../ui/ProgressPoint";
import Timer from "../../ui/Timer";
import AppLayouts from "../../ui/AppLayouts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { finish } from "./QuizSlice";
function Question() {
  const index = useSelector(state => state.index);
  const navigate = useNavigate()
  const question = useSelector(state => state.questions[index])
  const secondRemaining = useSelector(state => state.secondRomaining)
  const dispatch = useDispatch()
  useEffect(function () {
    if (secondRemaining === 0 || index === 14) {
      dispatch(finish())
      navigate('/finish')
    }
  }, [navigate, index, secondRemaining, dispatch])
  const answer = useSelector(state => state.answer);
  return (
    //!if index=14 you answer all questions
    <AppLayouts>
        <div className="w-[42rem]  m-auto mt-[50px] max-[563px]:w-[20rem] max-[320px]:w-[10rem] max-[320px]:flex max[320px]:justify-center max[320px]:flex-col max[320px]:w-[17rem]  ">
          <ProgressPoint />
          <p className="text-center text-[26px] mb-[17px] max-[563px]:text-[10rem]">{question.question}</p>
          <Options questions={question} answer={answer} />
          <NextQuestion />
          <Timer />
        </div>
    </AppLayouts>
  );
}
export default Question;
