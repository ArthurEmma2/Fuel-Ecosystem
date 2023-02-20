import React from 'react'
import fuel from '../Assets/img/Fuel pictures/Logos/fuel_logo.png'
import img from '../Assets/img/Fuel pictures/articles/gr_11.webp'

function Job() {
  return (
    <>
    <section className='container mt-32'>
      <div className='flex  items-center flex-col md:flex-row overflow-hidden'>
        <div className=''>
        <p className='text-white text-3xl lg:text-2xl font-extrabold e-header'> Let's buidl</p>
        <p className=' text-3xl lg:text-6xl text-[#1DE9B6] font-extrabold w-[full] md:w-[700px] tracking-[2px]'>Looking for job opportunities in the Fuel Ecosystem? We've got you Covered!</p>
        </div>
    
          <div className=' mt-5'>
            <img width="400px" src={img} alt='' />
    
      </div>
    

        </div>
        <a target='_blank' rel="noreferrer"  href='https://forms.gle/CS9nWkA5egwsT2W47'>
        <button className='bg-white shadow-md shadow-slate-400 text-center mx-auto py-2 px-10 rounded-lg text-xl hover:opacity-40  md:absolute md:top-[400px] lg:top-[560px]'>Post a job</button></a>
        <div className='mt-32'>
        <header className='text-white text-4xl opacity-70 font-bold text-left underline  underline-offset-8 mb-10'>Engineering</header>
          <div className='bg-[#1DE9B6] rounded-md shadow-md shadow-slate-600 w-full h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
            
              <div className='flex'>
                <div>
                <img  className='mt-5' src={fuel} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4016058005'>
                    <button className='text-black text-[12px] md:text-2xl  font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Front End Engineer</button> </a>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Remote-Global</p>
                </div>
              </div>
              <div className='hidden md:flex'>
              <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4016058005'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <div>
                <img  className='mt-5' src={fuel} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4082272005'>
                    <button className='text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Developer Relations Engineer - APAC</button>  </a>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Singapore</p>
                </div>
              </div>
              <div className='hidden md:flex'>
                <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4082272005'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4 mb-12'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center'>
                <div>
                <img  className='mt-5' src={fuel} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4002408005'>
                    <button className='text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Production Engineer</button>  </a>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Remote-Global</p>
                </div>
              </div>
              <div className='hidden md:flex'>
              <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4002408005'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md shadow-slate-600 w-full h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
            
              <div className='flex'>
                <div>
                <img  className='mt-5' src={fuel} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4067191005'>
                    <button className='text-black text-[12px] md:text-2xl  font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Developer Relations Engineer - Korea</button> </a>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Seoul, Korea</p>
                </div>
              </div>
              <div className='hidden md:flex'>
              <a target='_blank' rel="noreferrer"  href='https://boards.greenhouse.io/aptoslabs/jobs/4067191005'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
                </a>
              </div>
              </div>
       
        
          </div>
          </div>
    </section>
    
    </>
   
  )
}

export default Job