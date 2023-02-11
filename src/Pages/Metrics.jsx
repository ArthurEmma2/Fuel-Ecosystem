import React from 'react'
import metrics from '../Assets/img/metrics-removebg-preview.webp'

function Metrics() {
  return (
    <section className='mt-32'>
    <div className='sm:grid pt-20 grid-cols-1 md:flex container items-center justify-around'>
    
    <div className=''>
        <h2 className='text-4xl e-header font-bold tracking-[2px] text-center lg:text-left'>Metrics</h2>
        <p className='text-[#90E6D1] opacity-70 text-5xl lg:text-5xl mt-6 font-extrabold tracking-[2px] w-full md:w-[750px] text-center lg:text-left'>Aptos more cares about delivering all the ecosystem metrics</p>
        <p className='bg-[#D0C4D0] px-7 py-3 font-bold text-xl w-52 text-center lg:text-left rounded-md mt-6 text-black  animate-spin'>Stay Tuned......</p>
    </div>
    <div className=' mt-10 md:mt-4 animate-pulse'>
      <img className=' hidden md:flex' src={metrics}  alt=''/>
    </div>
    </div>
  </section>
  )
}

export default Metrics