import './App.css';

import Imageslider from './Components/Imageslider';
import Navbar from './Components/Navbar';
import EngineeringProgram from '../src/Components/EngineeringProgram';
import Slider from '../src/Components/Slider';
import Blog from '../src/Components/Blog';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Home from './NavbarCom/Home';
import AboutUs from './NavbarCom/Aboutus';
import DownloadB from './Dropdowns/DownloadB';
function App()
{
  return (
    <>
    <h1>
      <center> MIT ACADEMY OF ENGINEERING</center>
    </h1>
    <header><marquee> &emsp; Addmission Open for 2023-2024 Now Open &emsp;|&emsp; Apply Now &emsp; | &emsp; Download Brochure &emsp;</marquee></header>

    <Navbar/>
    <Imageslider/>
    <EngineeringProgram/>
    <Slider/>
    <Blog/>
    <Testimonial/>
    <Footer/>

    
    </>
  );
}

export default App;