import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import travel_01 from "./assets/travel-01.png";
import travel_02 from "./assets/travel-02.png";
import travel_03 from "./assets/travel-03.png";
import travel_04 from "./assets/travel-04.png";
import travel_05 from "./assets/travel-05.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
function App() {
  const [navbarHidden, setNavbarHidden] = useState(false);
  const navbarLinks = [
   
    { url: "#", title: "TTOURIST DIARIES" },
    { url: "#", title: "HOTEL" },
    { url: "#", title: "VEHICLE" },
    { url: "#", title: "EMERGENCY" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0 && !navbarHidden) {
        setNavbarHidden(true);
      } else if (window.pageYOffset === 0 && navbarHidden) {
        setNavbarHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarHidden]);
  return (
    <div className="App">
 <Navbar navbarLinks={navbarLinks} hidden={navbarHidden} />     <Hero imageSrc={travel_01}/>
     <Slider
        imageSrc={travel_02}
       
        title={<h2 style={{ color: "#D61535" }}>"DESIGNED FOR THE UNEXPECTED"</h2>}
        subtitle={
          "A stolen passport. A broken leg on a remote mountain. Civil unrest. Natural disasters. A positive COVID-19 test. Whatever the emergency, wherever you are, we are there to help. With Global Rescue, you get the peace of mind that the finest medical, security evacuation, field rescue, intelligence and telehealth personnel always have your back."
        }
        flipped={true}
      />
      <Slider
        imageSrc={travel_03}
       // title={"Travel Guard sorted me out with a really professional and efficient extraction"}
        title={<h2 style={{ color: "#D61535" }}>"Travel Guard sorted me out with a really professional and efficient extraction"</h2>}

        subtitle={"LEVISON WOOD British explorer travell writer and photographer."}  
        flipped={false}
      />
       <Slider
        imageSrc={travel_04}
        subtitle={"Our member services are available 24/7 to answer any questions you may have."}
       
        flipped={true}
      />
       <Hero imageSrc={travel_05}/>
    </div>
  );
}

export default App;
