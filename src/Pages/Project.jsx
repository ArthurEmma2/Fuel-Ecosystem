import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {ECOSYSTEM__DATA} from '../Assets/data/data'
// import EcosystemCards from '../Components/UI/ecosystemCards/EcosystemCards'

import '../Styles/projectStyles.css'

function Project() {
  const {id} = useParams()

const singleCard = ECOSYSTEM__DATA.find((item) => item.id === id )
  return (
    <>
    <section className='mt-52 mb-32'>
      <div className='container grid  md:grid-flow-col gap-10'>
      <div className=''>
      <button className='mb-5 hover:bg-[#90E6D1] hover:rounded-full hover:transition-all'><Link to='/ecosystem'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(255,255,255,1)"/></svg></Link></button>
      <img src={singleCard.imgUrl}  width='300px' className='w-full md:w-[300px]' alt=''/>
      <div className='mt-20 items-center cursor-pointer'>
      < a target='_blank' rel="noreferrer" href={singleCard.medium}>
      <span><i className="bg-[#90E6D1] p-[15px] rounded-full ri-medium-line hover:opacity-[0.4] mx-4"></i></span>
      </a>
      < a target='_blank' rel="noreferrer" href={singleCard.discord}>
      <span><i className="bg-[#90E6D1] p-[15px] rounded-full ri-discord-line hover:opacity-[0.4] mx-4"></i></span>
      </a>
               < a target='_blank' rel="noreferrer" href={singleCard.twitter}>
               <span><i className=" bg-[#90E6D1] p-[15px] rounded-full ri-twitter-line hover:opacity-[0.4] mx-4"></i></span>
               </a>
               < a target='_blank' rel="noreferrer" href={singleCard.website}>
               <span><i className=" bg-[#90E6D1] p-[15px] rounded-full ri-global-line hover:opacity-[0.4] mx-4"></i></span>
               </a>
      </div>
     
     </div>
    
      <div className='grid-flow-row'>
      <div className='text-[#90E6D1] text-5xl font-bold mb-5'>{singleCard.title}</div>
        <p className='text-white opacity-90 tracking-[2px] leading-7'>{singleCard.desc}</p>
      </div>
      
      </div>
    
    </section>
    

    </>
   
  )
}

export default Project