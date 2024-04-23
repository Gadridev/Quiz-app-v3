import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tick } from "../features/Quiz/QuizSlice"
function Timer() {
    const secondRemaining = useSelector(state => state.secondRomaining)
    const dispatch = useDispatch()
    const mins = Math.floor(secondRemaining / 60)
    const second = secondRemaining % 60
    useEffect(
        function () {
            const id = setInterval(function () {
                dispatch(tick());
            }, 1000);
            return () => clearInterval(id);
        },
        [dispatch]
    );
    return (
        <div>
            <div className="float-left text-[1.5rem] text-white border-2 border-gray-500 rounded-[100px] py-[0.7rem] px-[2.8rem]">
                {mins < 0 ? "00" : mins < 10 ? "0" + mins : mins}:
                {second < 0 ? "00" : second < 10 ? "0" + second : second}
            </div>
        </div>
    )
}

export default Timer
