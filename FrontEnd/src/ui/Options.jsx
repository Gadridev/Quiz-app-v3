import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { newAnswer } from '../features/Quiz/QuizSlice';
function Options({ questions, answer }) {
    const hasAnswered = answer !== null
    const dispatch = useDispatch()
    const secondRomaining = useSelector(state => state.secondRomaining);
console.log(secondRomaining)

    return (
        <div>
            <div className="flex flex-col gap-[1.2rem] mb-[3.2rem]">
                {questions.options.map((question, index) => (
                    <button className={`block font-inherit text-inherit text-xl border-2 border-dark bg-dark py-3 px-12 cursor-pointer rounded-full transition duration-300  text-left
                     ${index === answer ? 'transform translate-x-8' : ""}
                      ${hasAnswered ? index === questions.correctOption ? "bg-blueQuiz border-2 border-blueQuiz text-white" : "bg-orange  border-2 border-orange text-#343a40" : ""
                        }`}
                        key={index}
                        disabled={hasAnswered || index === 14 || secondRomaining <= 0}
                        onClick={() => dispatch(newAnswer(index))}
                    >
                        {question}
                    </button>
                ))

                }


            </div>

        </div>
    )
}
Options.propTypes = {
    questions: PropTypes.object.isRequired,
    answer: PropTypes.number,
};
export default Options
