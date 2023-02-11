import React,{useEffect} from 'react'
import community from '../../../Assets/img/commm1.png'
import education from '../../../Assets/img/education-removebg-preview.png'
import move from '../../../Assets/img/Move-removebg-preview.png'
import Discord from '../../../Assets/img/discord-logo-transparent-chat-removebg-preview.png'
import  Aos  from 'aos';

const STEP__DATA =[
    {
        title: 'Sway Language',
        desc: "Sway is a domain-specific language a blockchain-optimized VM designed for the Fuel blockchain. Sway is based on Rust,",
        imgurl: move
    },
    {
        title: 'Community',
        desc: "The Fuel Community is made up of Innovators, Creators, Contributors, and, of course, a few wild cards.",
        imgurl: community
    },
    {
        title: 'Education',
        desc: "Learn how core concepts of Fuel fit together, and how to observe them through APIs, CLI, and Explorer.",
        imgurl: education
    },
    {
        title: 'Join our Discord',
        desc: "Join ongoing topical conversations about Fuel. Attend our weekly ecosystem discusions learn and explore.",
        imgurl: Discord,
        Url: "https://discord.com/invite/xfpK4Pe"
    },
]





function StepSection() {
    useEffect(() =>{
        Aos.init({duration:2000})
      },[])
  return (
   <section className='mt-32 md:mt-64'>
    <div className="container overflow-x-hidden">
    <div className='container'>
        <h2 className='e-header text-2xl text-left  md:text-5xl lg:text-6xl mb-3 font-bold'data-aos='fade-right'>dive in headfirst</h2>
        <p className='text-white opacity-70 text-[15px] text-left md:text-[25px] font-bold tracking-wider w-full md:w-[750px]'>
        Whether you’re an individual looking to use one of the projects 
         or a developer wanting to build on Fuel now is the time  
         to get started.</p>
        </div>

        <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mt-16 md:mt-32 gap-12'>
            {
                STEP__DATA.map((item, index) =>{
                const {title, desc, imgurl} = item
                return(
                    <div key={index} className=' p-7 items-center rounded-lg'>
                        <div className='mx-auto'>
                        <a target='_blank' rel="noreferrer" href={item.Url}>
                            <img src={imgurl} width='70px' alt='logo'/>
                            </a>
                            </div>
                        <div>
                        <h4 className=' e-header font-bold my-3'>{title}</h4>    
                        <p className='text-white opacity-70 tracking-wider leading-7'>{desc}</p>
                      
                        </div>

                      
                        
                    </div>
                )
                })
            }
        </div>

    </div>
   </section>
  )
}

export default StepSection