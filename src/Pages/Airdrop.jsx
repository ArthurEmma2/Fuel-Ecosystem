import React from 'react'

import airdrop from '../Assets/img/airdrop.webp'

function Airdrop() {
  return (
    <section className='mt-32'>
      <div className='sm:grid pt-20 grid-cols-1 md:flex container items-center justify-around'>
      
      <div className=''>
          <h2 className='text-4xl e-header font-bold tracking-[2px]'>Airdrop</h2>
          <p className='text-[#90E6D1] opacity-70 text-5xl lg:text-7xl mt-6 font-extrabold tracking-[2px]'>Claim Page</p>
          <p className='bg-[#D0C4D0] px-7 py-3 font-bold text-xl w-52 text-center rounded-md mt-6 text-black  animate-spin'>Coming Soon</p>
      </div>
      <div className='mt-10 md:mt-4 animate-pulse'>
        <img src={airdrop}  alt=''/>
      </div>
      </div>
    </section>
  )
}

export default Airdrop