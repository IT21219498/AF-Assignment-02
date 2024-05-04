const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-white'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
