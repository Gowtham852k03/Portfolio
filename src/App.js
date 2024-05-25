import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import videobg from '../src/images/bg.mp4'
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import HashLoader from "react-spinners/HashLoader";
import Logo from "../src/images/logo2.gif";


function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true)

    setTimeout(() => {
      SetLoading(false)
    }
      , 1900)
  }, [])

  return (
    <>
      {Loading ? (
        <div className="loader">
          <img src={Logo} alt="Logo" className='intrologo'
            color={'black'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <video src={videobg} autoPlay loop muted />



          <Nav />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
