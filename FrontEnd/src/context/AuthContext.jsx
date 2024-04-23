import {createContext, useReducer } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext();
function AuthReducer(state, action) {
  switch (action.type) {
    case "login":
      return { user: action.payload };
    case "logout":
      return { user: null };
    default:
      return state;
  }
}
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired // Validates that children is a React node and is required
  };

