import { useEffect } from "react";
import bgVideo from "./assets/earth-bg.mp4";
import BannerOne from "./components/Banner/BannerOne";
import BannerTwo from "./components/Banner/BannerTwo";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out"
    });
  })

  return (
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
        <Services />
        <BannerOne />
        <BannerTwo />
        <Footer/>
      </div>
  );
}

export default App;
