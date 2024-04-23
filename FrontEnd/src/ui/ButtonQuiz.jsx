import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { useQuizId } from '../features/Quiz/useQuizId';
function ButtonQuiz({ title, id }) {
    const navigate = useNavigate()

    return (
        <>
            <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded px-[6rem] py-3" onClick={() => navigate(`/quiz/${id}`)}>
                {title}
            </button>
        </>
    )
}
ButtonQuiz.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
};
export default ButtonQuiz
