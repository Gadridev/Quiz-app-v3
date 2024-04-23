import PropTypes from 'prop-types';
function Wrapper({ children }) {
    return (
        <div className='py-[2.4rem] px-[4rem] bg-gray border-gray100 rounded-[7px] text-[1.4rem] '>
            {children}
        </div>
    )
}
Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper
