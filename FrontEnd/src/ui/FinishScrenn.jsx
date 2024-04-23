import { useDispatch, useSelector } from "react-redux"
import AppLayouts from "./AppLayouts";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { restart } from "../features/Quiz/QuizSlice";

function FinishScreen() {
    const points = useSelector((state) => state.points)
    const highscore = useSelector((state) => state.highScoore)
    const questions = useSelector((state) => state.questions)
    const possiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);
    const percentage = (points / possiblePoints) * 100
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const RestartHanlde=(e)=>{
        e.preventDefault()
        dispatch(restart())
        navigate(-2)
    }
    let emoji;
    if (percentage === 100) emoji = '🥇';
    if (percentage >= 80 && percentage < 100) emoji = '🎉'
    if (percentage >= 50 && percentage < 80) emoji = '🥰'
    if (percentage >= 0 && percentage < 50) emoji = '😢'
    if (percentage === 0) emoji = '🤷'
    return (
        <AppLayouts>
        <div className="flex items-center justify-center flex-col mt-[10rem]  "> 
            <p className="bg-blueQuiz text-light rounded-full text-center py-8 px-4 font-semibold text-2xl  ">
                <span>{emoji} </span>You scoored <strong>{points}</strong> out of {possiblePoints} ({Math.ceil(percentage)})
            </p>
            <p className="mt-[2rem]">(HighScoore : {highscore} points)</p>
            <Button onClickR={RestartHanlde}>Restart</Button>
        </div>
        </AppLayouts>
    )
}
export default FinishScreen
