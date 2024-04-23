import PropTypes from 'prop-types';

function Button({ children, onClickR  }) {
    return (
        <button className="text-[1.5rem] text-white border-2 border-gray-500 rounded-[100px] py-[0.7rem] px-[2.8rem] float-right" onClick={onClickR}>
            {children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClickR: PropTypes.func.isRequired
};
export default Button;
