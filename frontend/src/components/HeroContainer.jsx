import PropTypes from "prop-types";

const HeroContainer = ({ children, url }) => {
  return (
    <div className='relative h-screen'>
      <video
        className='absolute inset-0 w-full object-cover'
        autoPlay
        loop
        muted
      >
        <source src={url} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-0 '>{children}</div>
    </div>
  );
};

export default HeroContainer;

HeroContainer.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
