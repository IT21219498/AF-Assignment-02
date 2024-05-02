import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Navbar />}
      <div className='container font-mono	'>{children}</div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
