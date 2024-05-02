import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import HeroContainer from "../components/HeroContainer";
import Video from "../videos/Home.mp4";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <HeroContainer url={Video}>
      <h1 className='text-4xl font-bold text-center text-white'>
        Welcome to NASA
      </h1>
    </HeroContainer>
  );
};

export default Home;
