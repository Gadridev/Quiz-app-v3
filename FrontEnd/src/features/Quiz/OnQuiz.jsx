import Description from "../description/Description"
import { useQuizId } from "./useQuizId"

function OnQuiz() {
    const {isLoading,Quiz}=useQuizId()
    console.log(isLoading,Quiz)
    return (
        <div className="bg-gray-900 min-h-[100vh]  text-white">
            <Description />
        </div>
    )
}

export default OnQuiz
