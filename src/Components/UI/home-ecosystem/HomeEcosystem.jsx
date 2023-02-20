import React from 'react'
import './home-ecosystem.css'
import {Link} from 'react-router-dom'



import {ECOSYSTEM__DATA} from '../../../Assets/data/data'
import EcosystemCards from '../ecosystemCards/EcosystemCards'

function HomeEcosystem() {
  return (
   <section className='mt-32 md:mt-64'>
    <div className='container'>
      <div className='flex items-center justify-between'>
      <div>
        <h2 className='e-header text-2xl text-left  md:text-5xl lg:text-6xl mb-3 font-bold capitalize'>Fuel Ecosystem</h2>
        <p className='text-white opacity-70 text-[15px] text-left md:text-[25px] font-bold tracking-wider  w-[220px] lg:w-[500px]'>
       Here are some of the curated list
        of projects building on Fuel</p>
        </div>

        <div className='text-black'>
        <span className='bg-[#1DE9B6] text-[11px] p-2 md:p-3 md:text-sm rounded-[15px] shadow-slate-400 shadow-md outline-none border-none hover:bg-transparent hover:text-white'><Link to='/ecosystem'>Explore More<i class="ri-more-fill"></i></Link></span>
        </div>
        </div>
        <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mt-32 gap-12'>

        {ECOSYSTEM__DATA.slice(0,8).map((item) =>{
          return(
            <EcosystemCards item={item}  />
          )
        })}
        </div>
    </div>
    
   </section>
  )
}

export default HomeEcosystem