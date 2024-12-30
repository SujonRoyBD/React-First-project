import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nabbar from './Component/Navbar/Nabbar'
import Basement from './Component/Basement renovation/Basement'
import StarScore from './Component/StarScore/StarScore'
import Card_1 from './Component/Card1/Card_1'
import About from './Component/About_us/About'
import Experinced from './Component/Experinced/Experinced'
import Personal_Renovation from './Component/Personal_Renovation'
import Working from './Component/Working_process/Working'
import Consideration from './Component/Consideration/Consideration'
import Gleary from './Component/Gleary/Gleary'
import Expered from './Component/Experd/Expered'
import Elavating from './Component/Elevating/Elavating'
import Trusted from './Component/Trusted/Trusted'
import Renovation from './Component/Renovation/Renovation'
import RenovantionDonts from './Component/RenoventionDont/RenovantionDonts'
import Benifits from './Component/Benifits/Benifits'
import Reveiws from './Component/Reviwes/Reveiws'
import Dos from './Component/Dos_Dont/Dos'
import Chose_us from './Component/Chose_us/Chose_us'
import Ready from './Component/Ready/Ready'
import FAQ from './Component/Faqs/Faqs'
import GetConsult from './Component/GetConsult/GetConsult'
import Profetional from './Component/Profetional/Profetional'
import Footer from './Component/Footer/Footer'
  
// import FetchApi from './Component/FetchApi/FetchApi'
// import { FaArrowRight } from "react-icons/fa";
function App() {
  

  return (
    <div className=''>
      
      <Nabbar />
      <Basement /> 
      <StarScore /> 
      <Card_1 />
      <About />
      <Experinced />
      <Personal_Renovation />
      <Working />
      <Consideration />
      
      {/* <FetchApi /> */}
      <Gleary />
      <Expered />
      <Elavating />
      <Trusted />
      <Renovation />
      <RenovantionDonts />
      <Benifits />
      {/* <Reveiws /> */}
      <Dos />
      <Chose_us />
      <Ready />
      <FAQ />
      <GetConsult />
      <Profetional />
      <Footer />
      
    </div>
  )
}


export default App
