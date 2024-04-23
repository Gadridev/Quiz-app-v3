import { useDispatch, useSelector } from "react-redux"
import { finish, nextQuestion } from "../features/Quiz/QuizSlice";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function NextQuestion() {
    const numQuestions = useSelector(state => state.Quiz[0].questions.length);
    const index = useSelector(state => state.index)
    const answer = useSelector(state => state.answer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function finishClick() {
        dispatch(finish())
        navigate('/finish')
    }
    if (answer === null) return null;
    if (index < numQuestions - 1)
        return (
            <Button
                onClickR={() => dispatch(nextQuestion())}
            >
                Next
            </Button>
        );
    
    if (index === numQuestions - 1)
        return (
            <Button onClickR={finishClick}>
                Finish
            </Button>
        )
}
export default NextQuestion
