import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/Login.mp4";

export default function Register() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { registerUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  /**
   * Handles the input change event.
   *
   * @param {Object} event - The input change event object.
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  /**
   * Handles the form submission for user registration.
   *
   * @param {Event} event - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.error("Please enter all the required fields!");
      return;
    }

    //check if the password and confirm password match
    if (credentials.password !== credentials.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
  };

  return (
    <HeroContainer url={Video}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-mono	'>
        <div className=' bg-gradient-to-r from-white sm:mx-auto sm:w-full sm:max-w-sm border p-6 rounded-md shadow-lg'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'
            alt='Your Company'
          />
          <h2 className='text-2xl font-bold text-center text-black mb-4'>
            Create your account
          </h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={credentials.email}
                onChange={handleInputChange}
                className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50'
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                value={credentials.password}
                onChange={handleInputChange}
                className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50'
              />
            </div>
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Confirm Password
              </label>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                autoComplete='new-password'
                required
                value={credentials.confirmPassword}
                onChange={handleInputChange}
                className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50'
              />
            </div>
            <button
              type='submit'
              className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              style={{ backgroundColor: "#0b3d91" }}
            >
              Register
            </button>
          </form>
          <p className='mt-6 text-center text-sm text-gray-900'>
            Already have an account?{" "}
            <Link
              to='/login'
              className='font-semibold leading-6 text-white hover:text-black'
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </HeroContainer>
  );
}
