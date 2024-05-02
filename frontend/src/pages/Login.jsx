import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import { Link } from "react-router-dom";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/Login.mp4";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { loginUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.email || !credentials.password) {
      toast.error("Please enter all the required fields!");
      return;
    }

    loginUser(credentials);
  };

  return (
    <HeroContainer url={Video}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-mono	'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm border p-6 rounded-md shadow-lg'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'
            alt='Your Company'
          />
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className='mt-6 space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-500'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={credentials.email}
                  onChange={handleInputChange}
                  className='block w-full border-gray rounded-md shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-500'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-6 text-center text-sm text-gray-500'>
            Don&apos;t have an account?{" "}
            <Link
              to='/register'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </HeroContainer>
  );
}
