import { useState, useEffect } from "react";

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
    <div className='mx-5 mt-4'>
      {apodData ? (
        <>
          <h1 className='text-3xl font-bold'>{apodData.title}</h1>
          <p className='text-sm text-gray-500 mt-2'>{apodData.date}</p>
          <img
            src={apodData.url}
            alt={apodData.title}
            className='mt-4 rounded-lg shadow-lg'
          />
          <p className='mt-4'>{apodData.explanation}</p>
        </>
      ) : (
        <p>Loading...</p>
        // <Loading />
      )}
    </div>
  );
}

export default APOD;
