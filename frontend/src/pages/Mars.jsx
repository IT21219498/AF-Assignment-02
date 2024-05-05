import { useState, useEffect } from "react";
import Video from "../videos/Mars.mp4";
import HeroContainer from "../components/HeroContainer";
import Loading from "../components/Loading";

/**
 * Renders a page displaying Mars rover photos fetched from the NASA API.
 * @returns {JSX.Element} The Mars component.
 */
function Mars() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [filterCameras, setFilterCameras] = useState([]);
  const photosPerPage = 6;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /**
     * Fetches Mars photos from the NASA API.
     * @returns {Promise<void>} A promise that resolves when the photos are fetched.
     */
    const fetchMarsPhotos = async () => {
      try {
        setIsLoading(true); // Set isLoading to true before fetching data
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&earth_date=2015-6-3&page=${page}&api_key=Iz8C0yNbWJs0BSL1vfcviwLh594UoEzqh8yxOv8m`
        );
        const data = await response.json();
        setPhotos(data.photos);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (error) {
        console.error("Error fetching Mars photos:", error);
        setIsLoading(false); // Set isLoading to false in case of an error
      }
    };
    fetchMarsPhotos();
  }, [page]);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  /**
   * Handles the camera filter selection.
   *
   * @param {string} camera - The camera to be filtered.
   */
  const handleCameraFilter = (camera) => {
    setIsLoading(true);
    setFilterCameras((prevFilterCameras) => {
      if (prevFilterCameras.includes(camera)) {
        return prevFilterCameras.filter((c) => c !== camera);
      } else {
        return [...prevFilterCameras, camera];
      }
    });
    setIsLoading(false);
  };

  const filteredPhotos = filterCameras.length
    ? photos.filter((photo) => filterCameras.includes(photo.camera.name))
    : photos;

  const visiblePhotos = filteredPhotos.slice(
    (page - 1) * photosPerPage,
    page * photosPerPage
  );

  /**
   * Renders the pagination numbers for the Mars page.
   * @returns {Array<JSX.Element>} An array of JSX elements representing the pagination numbers.
   */
  const renderPaginationNumbers = () => {
    const paginationNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded-full ${
            i === page
              ? "bg-gray-800 border text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return paginationNumbers;
  };

  /**
   * Renders the camera filters based on the photos array.
   * @returns {JSX.Element[]} An array of JSX elements representing the camera filters.
   */
  const renderCameraFilters = () => {
    const cameras = [...new Set(photos.map((photo) => photo.camera.name))];
    return cameras.map((camera) => (
      <button
        key={camera}
        onClick={() => handleCameraFilter(camera)}
        className={`mx-1 px-3 py-1 rounded-full ${
          filterCameras.includes(camera)
            ? "bg-gray-800 border text-white"
            : "bg-white text-gray-700"
        }`}
      >
        {camera}
      </button>
    ));
  };

  return (
    <HeroContainer url={Video}>
      {isLoading ? ( // Render Loading component if isLoading is true
        <div className='flex items-center justify-center h-screen'>
          <Loading />
        </div>
      ) : (
        <>
          <div className='mx-5 mt-4'>
            <h1 className='text-3xl font-bold text-white mb-4'>
              {" "}
              Mars Rover Photos{" "}
            </h1>
            <p className='text-white mb-4'>
              This API is designed to collect image data gathered by NASA&apos;s
              Curiosity, Opportunity, and Spirit rovers on Mars and make it more
              easily available to other developers, educators, and citizen
              scientists. This API is maintained by Chris Cerami.
            </p>
            <div className='flex flex-wrap mb-4'>{renderCameraFilters()}</div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-4'>
            {visiblePhotos.map((photo) => (
              <div key={photo.id} className='bg-white rounded-lg shadow-lg p-4'>
                <img
                  src={photo.img_src}
                  alt={`Mars Rover Photo ${photo.id}`}
                  className='w-full h-48 object-cover rounded-md mb-0'
                />
                {/* <h2 className='text-xl font-bold text-gray-800 mb-0'>
              {" "}
              {photo.rover.name}{" "}
            </h2> */}
                <p className='text-gray-700 mb-0'>
                  Taken by:{photo.camera.full_name} on {photo.earth_date}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className='mr-2 px-4 py-2 bg-gray-800 border text-white rounded-md'
            >
              Prev
            </button>
            {renderPaginationNumbers()}
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className='ml-2 px-4 py-2 bg-gray-800 border text-white rounded-md'
            >
              Next
            </button>
          </div>
        </>
      )}
    </HeroContainer>
  );
}

export default Mars;
