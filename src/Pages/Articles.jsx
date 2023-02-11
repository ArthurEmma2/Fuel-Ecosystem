import React from 'react'
// import  {ArticlesS__DATA}  from '../Assets/data/data'
import '../Styles/contributrors.css'
import image from '../Assets/img/wall2-removebg-preview.webp'

function Articles() {
  return (
 <div className='container'>
 <div className=' flex-col lg:flex-row flex lg:justify-between items-center mt-52'>
 <div>
    <header className='text-4xl e-header font-bold tracking-[2px]'>Articles</header>
    <p className='font-extrabold text-[#1DE9B6] text-3xl lg:text-6xl w-full md:w-[750px]'>Discover all the recent  news and articles  in the Aptos ecosystem</p>
 </div>
 <div className=''>
<img className='hidden md:flex' src={image} alt='' />
 </div>
 
 </div>
 <button className='mt-5 md:mt-auto py-2 px-7 text-black bg-slate-400 mx-auto rounded-md font-semibold shadow-md shadow-slate-300'>Coming soon</button>
 </div>
  )

}
export default Articles