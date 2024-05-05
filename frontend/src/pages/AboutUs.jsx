import HeroContainer from "../components/HeroContainer";
import Video from "../videos/About.mp4";

function AboutUs() {
  return (
    <HeroContainer url={Video}>
      <div className='flex justify-center  mx-32 mt-10'>
        <div className='container px-4 py-8 text-white border rounded'>
          <h1 className='text-3xl font-bold mb-4'>About Us</h1>
          <p className='text-lg mb-4'>
            Welcome to our website! We are a team of passionate individuals
            dedicated to bringing you the latest and most fascinating
            information about space exploration and astronomy.
          </p>
          <p className='text-lg mb-4'>
            Our mission is to inspire and educate people about the wonders of
            the universe, from the depths of outer space to the beauty of our
            own planet Earth.
          </p>
          <p className='text-lg mb-4'>
            Whether you&apos;re a seasoned space enthusiast or just curious
            about what lies beyond our atmosphere, we&apos;re here to provide
            you with engaging content, breathtaking images, and insightful
            articles.
          </p>
          <p className='text-lg mb-4'>
            Thank you for visiting our website, and we hope you enjoy your
            journey through the cosmos with us!
          </p>
        </div>
      </div>
    </HeroContainer>
  );
}

export default AboutUs;
