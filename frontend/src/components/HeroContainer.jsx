import PropTypes from "prop-types";

const HeroContainer = ({ children, url }) => {
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
        >
          <source src={url} type='video/mp4' />
          {/* Add additional source elements for different video formats */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-0'>{children}</div>
    </div>
  );
};

export default HeroContainer;

HeroContainer.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
