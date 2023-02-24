import React,{useEffect} from 'react'
 import "./HeroSection.css"
 import  Aos  from 'aos';
 import ReactRotatingText from "react-rotating-text/lib/ReactRotatingText";



function HeroSection() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='mt-64'>
      <div className='container'>
        <h1 className=' text-left text-3xl leading-[45px] glowing_text md:text-left md:leading-[60px] md:text-5xl lg:text-6xl font-bold lg:text-center tracking-[2px]'>Stay informed about Fuel advancements, stay ahead in Fuel ecosystem.
                                    The <ReactRotatingText pause={3000}
                                    typingInterval={100} items={['locus', 'center']} />  of <span
                                    >Fuel</span></h1>  
                <h3 className='text-left text-[17px] md:text-[25px] text-white opacity-70 mt-20 md:text-left lg:text-center tracking-[2px] leading-[30px]'>     
              Fuel Ecosystem, a  platform to explore everything about Fuel major 
                <p data-aos='fade-down'>  features ( education, Latest articles and blogs, job board,<br /> metrics and projects dashboard).</p> </h3>
      </div>
    </section>
  )
}

export default HeroSection