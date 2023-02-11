import React from 'react'
import HeroSection from '../Components/UI/HeroSection'
// import Roadmap from '../Components/UI/Roadmap/Roadmap'
import HomeEcosystem from '../Components/UI/home-ecosystem/HomeEcosystem'
import StepSection from '../Components/UI/Step-section/StepSection.jsx'




function Home() {
  return (
   <>
   <HeroSection />
   {/* <Roadmap /> */}
   <HomeEcosystem />
   <StepSection />

   </>
  )
}

export default Home