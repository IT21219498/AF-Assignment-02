import { useState } from "react";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/Earth.mp4";

function Earth() {
  const [lon, setLon] = useState("-95.33");
  const [lat, setLat] = useState("29.78");
  const [date, setDate] = useState("2018-01-01");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFetchImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=DEMO_KEY`
      );
      const data = await response;
      console.log("🚀 ~ handleFetchImage ~ data:", data);
      setImageUrl(data.url);
    } catch (error) {
      console.error("Error fetching Earth image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HeroContainer url={Video}>
      <div className='flex flex-col items-center justify-center h-screen '>
        <h1 className='text-3xl font-bold flex justify-center text-white mb-4'>
          Earth Imagery
        </h1>
        <div className='mb-6'>
          <input
            type='text'
            placeholder='Longitude'
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 mr-2'
          />
          <input
            type='text'
            placeholder='Latitude'
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 mr-2'
          />
          <input
            type='date'
            placeholder='Date (YYYY-MM-DD)'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 mr-2'
          />
          <button
            onClick={handleFetchImage}
            className='bg-indigo-600 text-white rounded-md px-4 py-2'
          >
            Fetch Image
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          imageUrl && <img src={imageUrl} alt='Earth' className='' />
        )}
      </div>
    </HeroContainer>
  );
}

export default Earth;
