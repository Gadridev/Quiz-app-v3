import { useSelector } from "react-redux"

function ProgressPoint() {
    
    const index = useSelector(state => state.index)
    const points = useSelector(state => state.points)
    const answer = useSelector(state => state.answer)
    const questions = useSelector(state => state.questions)
    const possiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);
    console.log(points,possiblePoints)
    const numQuestions = useSelector(state => state.Quiz[0].questions.length);

    return (
        <header className='progress'>
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>Question <strong>{index + 1}</strong>/{numQuestions}</p>
            <p><strong>{points}</strong>/{possiblePoints}</p>
        </header>
    )
}

export default ProgressPoint
