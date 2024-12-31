import React from "react";
import Index from "./Components/Home/HomeScreen";
import ContactMe from "./Components/Home/ContactMe";
import Navbar from "./Components/Home/Navbar";
import MySkills from "./Components/Home/MySkills";
import Footer from "./Components/Home/Footer";
import Projects from "./Components/Home/Projects";
import Experience from "./Components/Home/Experience";
import Education from "./Components/Home/Education";

function App() {
  return (
    <div>
      <Navbar/>
      <Index/>
      <Experience/>
      <Projects/>
      <MySkills />
      <Education/>
      <ContactMe />
      <Footer/>
    </div>
  );
}

export default App;
