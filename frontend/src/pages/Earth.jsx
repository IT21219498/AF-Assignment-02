import { useContext, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/Earth.mp4";
import Loading from "../components/Loading";
import ToastContext from "../context/ToastContext";

function Earth() {
  const [date, setDate] = useState("2018-01-01");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { toast } = useContext(ToastContext);

  /**
   * Fetches the Earth image from NASA API based on the provided coordinates and date.
   * @returns {Promise<void>} A promise that resolves when the image is fetched and processed.
   */
  const handleFetchImage = async () => {
    if (!validateDate(date)) {
      toast.error(
        "Please enter a valid date between 2018-01-01 and 2021-06-01"
      );
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=${date}&dim=0.15&api_key=Iz8C0yNbWJs0BSL1vfcviwLh594UoEzqh8yxOv8m`
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

  const validateDate = (date) => {
    // check if the date is within the range of 2018-01-01 to 2021-06-01
    if (date < "2018-01-01" || date > "2021-06-01") {
      return false;
    }

    return true;
  };

  //download image without navigate to the image
  const handleDownloadImage = async () => {
    if (!imageUrl) {
      toast.error("Please fetch an image first!");
      return;
    }
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href;
    link.setAttribute("href", url);
    link.setAttribute("download", "earth.jpg");
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <HeroContainer url={Video}>
      <div className='flex flex-col items-center justify-center h-screen '>
        <h1 className='text-3xl font-bold flex justify-center text-white mb-4 mt-32 '>
          Earth Imagery
        </h1>
        <div className='mb-6'>
          {/* <input
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
          /> */}
          <input
            type='date'
            placeholder='Date (YYYY-MM-DD)'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 mr-2'
          />
          <button
            onClick={handleFetchImage}
            className='bg-gray-800 border text-white rounded-md px-4 py-2'
          >
            Fetch Image
          </button>
          <button
            className='bg-gray-800 border text-white rounded-md px-4 py-2 ml-2'
            onClick={handleDownloadImage}
          >
            Download Image
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          imageUrl && (
            <img
              src={imageUrl}
              alt='Earth'
              className='h-screen border p-5 bg-white rounded-md shadow-lg object-cover'
            />
          )
        )}
      </div>
    </HeroContainer>
  );
}

export default Earth;
