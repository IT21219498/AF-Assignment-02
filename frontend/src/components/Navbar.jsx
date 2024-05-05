import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const { toast } = useContext(ToastContext);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className='bg-gray-800 font-mono	' aria-label='Main navigation'>
      <div className='max-w-7x2 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link to='./'>
                <img
                  className='mx-auto h-10 w-auto'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'
                  alt='NASA logo'
                />
              </Link>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='hidden text-white md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <>
                  <Link
                    to='/'
                    className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Home
                  </Link>
                  <Link
                    to='/mars'
                    className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Mars-Rover-Photos
                  </Link>
                  <Link
                    to='/apod'
                    className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    APOD
                  </Link>
                  <Link
                    to='/earth'
                    className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Earth
                  </Link>
                  <Link
                    to='/about'
                    className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    About Us
                  </Link>

                  <button
                    onClick={() => {
                      setUser(null);
                      localStorage.clear();
                      toast.success("Logged out successfully!");
                      navigate("/login", { replace: true });
                    }}
                    className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0 mx-4'
                  >
                    Logout
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
