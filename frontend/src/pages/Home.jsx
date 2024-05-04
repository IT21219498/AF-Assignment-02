import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/Home.mp4";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);

  const handleExplore = (path) => {
    navigate(path);
  };

  return (
    <>
      <HeroContainer url={Video}>
        <h1 className='text-4xl font-bold text-center text-white mt-10 '>
          Welcome to NASA Explorer
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 mt-64'>
          {/* Card 1 */}
          <div className='bg-gradient-to-r from-white border rounded-lg shadow-lg p-4 mx-10'>
            <h2 className='text-xl font-semibold mb-2'>Mars Rover Photos</h2>
            <p className='text-gray-700 mb-4'>
              Explore the latest photos captured by Mars rovers.
            </p>
            <button
              onClick={() => handleExplore("/mars")}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Explore
            </button>
          </div>

          {/* Card 2 */}
          <div className='bg-gradient-to-r from-white border rounded-lg shadow-lg p-4 mx-10'>
            <h2 className='text-xl  font-semibold mb-2'>APOD</h2>
            <p className='text-gray-700 mb-4'>
              Discover the Astronomy Picture of the Day.
            </p>
            <button
              onClick={() => handleExplore("/apod")}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Explore
            </button>
          </div>

          {/* Card 3 */}
          <div className='bg-gradient-to-r from-white border rounded-lg shadow-lg p-4 mx-10'>
            <h2 className='text-xl font-semibold mb-2'>Earth</h2>
            <p className='text-gray-700 mb-4'>
              Unlock the beauty of our planet with satellite imagery.
            </p>
            <button
              onClick={() => handleExplore("/earth")}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Explore
            </button>
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

export default Home;
