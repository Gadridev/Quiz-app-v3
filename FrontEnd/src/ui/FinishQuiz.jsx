import { useNavigate } from "react-router-dom";
function FinishQuiz() {
    const navigate=useNavigate()
    function restartQuiz(e){
        e.preventDefault();
        navigate(-1)
    }
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className=" px-[2.5rem] py-[3.5rem]">
                <h1 className="font-bold text-center mb-3 text-2xl">You ve finished the quiz. If youd like to restart,<br/> simply click the  Restart Quiz  button below.</h1>
                <div className="w-[100%] flex">
                <button onClick={restartQuiz} className="bg-purple-800 font-bold text-stone-100 border border-solid text-center px-5 py-4 mx-auto mt-2 rounded-2xl">Restart the Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default FinishQuiz
