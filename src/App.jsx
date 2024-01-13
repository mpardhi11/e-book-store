// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import FeaturedAuthors from "./components/FeaturedAuthors";
import FeaturedBooks from "./components/FeaturedBooks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopSellingBooks from "./components/TopSellingBooks";
// register Swiper custom elements
register();

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <TopSellingBooks />
      <FeaturedBooks />
      <Footer />
    </div>
  );
};

export default App;
