import { useState, useEffect } from "react";
import Video from "../videos/Mars.mp4";
import HeroContainer from "../components/HeroContainer";

function Mars() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=Iz8C0yNbWJs0BSL1vfcviwLh594UoEzqh8yxOv8m"
        );
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error("Error fetching Mars photos:", error);
      }
    };

    fetchMarsPhotos();
  }, []);

  return (
    <HeroContainer url={Video}>
      <div className='mx-5 mt-4'>
        <h1 className='text-3xl font-bold text-white mb-4'>
          Mars Rover Photos
        </h1>
        <p className='text-white mb-4'>
          This API is designed to collect image data gathered by NASA&apos;s
          Curiosity, Opportunity, and Spirit rovers on Mars and make it more
          easily available to other developers, educators, and citizen
          scientists. This API is maintained by Chris Cerami.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='bg-white rounded-lg shadow-lg p-4'>
            <img
              src={photo.img_src}
              alt={`Mars Rover Photo ${photo.id}`}
              className='w-full h-48 object-cover rounded-md mb-4'
            />
            <h2 className='text-xl font-semibold mb-2'>Mars Rover Photo</h2>
            <p className='text-gray-700 mb-4'>
              Taken by {photo.camera.full_name} on {photo.earth_date}
            </p>
          </div>
        ))}
      </div>
    </HeroContainer>
  );
}

export default Mars;
