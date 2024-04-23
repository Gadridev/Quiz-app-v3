import Header from "./Header"
import PropTypes from 'prop-types';
function AppLayouts({children}) {
    return (
        <div className="bg-gray-900 h-[100vh] text-white" >
        <Header />
        <div>
       {children}
        </div>
        </div>
    )
}
AppLayouts.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayouts
