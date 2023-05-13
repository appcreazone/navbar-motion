import Banner from "./Banner/Banner";
import Proyects from "./components/Proyects";
import GalleryJu from "./components/GalleryJu";
//ver layout y page principal del app

const Homepage = () => {
  return (
    <div id="banner" className="snap-center">
      <Banner />
      <Proyects />
      <GalleryJu />
    </div>
  );
};

export default Homepage;
