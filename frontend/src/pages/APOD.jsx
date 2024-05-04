import { useState, useEffect } from "react";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/APOD.mp4";
import Loading from "../components/Loading";

function APOD() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=Iz8C0yNbWJs0BSL1vfcviwLh594UoEzqh8yxOv8m"
        );
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };
    fetchAPOD();
  }, []);

  return (
    <HeroContainer url={Video} className='overflow-hidden'>
      <div className='max-w-4x2 mx-auto px-4 sm:px-6 lg:px-8'>
        {apodData ? (
          <div className='mt-8'>
            <div className='flex justify-between items-center mb-8'>
              <div>
                <h1 className='text-3xl font-bold text-white'>
                  {apodData.title}
                </h1>
                <p className='text-sm text-gray-500'>{apodData.date}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-1/2 mb-4 md:mb-0'>
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className='w-full rounded-lg shadow-lg border-2 border-white'
                />
              </div>
              <div className='md:w-1/2 md:pl-8'>
                <p className='text-white leading-relaxed'>
                  {apodData.explanation}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <Loading />
          </div>
        )}
      </div>
    </HeroContainer>
  );
}

export default APOD;
