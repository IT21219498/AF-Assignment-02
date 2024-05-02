import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastContainer autoClose={2000} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;

ToastContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
