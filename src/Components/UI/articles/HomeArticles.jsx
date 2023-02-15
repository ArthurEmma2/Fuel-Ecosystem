import React from 'react'
import { article } from '../../../Assets/data/Articles'
import { Link } from 'react-router-dom'

function HomeArticles() {
  return (
    <section className='mt-32 md:mt-64'>
    <div className='container'>
      <div className='flex items-center justify-between'>
      <div>
        <h2 className='e-header text-2xl text-left  md:text-5xl lg:text-6xl mb-3 font-bold capitalize'>Fuel Articles</h2>
        <p className='text-white opacity-70 text-[15px] text-left md:text-[25px] font-bold tracking-wider w-auto lg:w-[500px]'>
        Discover all the recent news and articles in the Fuel ecosystem</p>
        </div>

        <div className='text-black'>
        <span className='bg-[#1DE9B6] text-[11px] p-2 md:p-3 md:text-sm rounded-[15px] shadow-slate-400 shadow-md outline-none border-none hover:bg-transparent hover:text-white'><Link to='/articles'>Explore More<i class="ri-more-fill"></i></Link></span>
        </div>
        </div>
        <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mt-32 gap-12'>

        {article.slice(0,8).map((item) =>{
            const {id, title, img, url} = item
          return(
            <div className='text-white' key={id}>
                <a href={url}>
                <img className='hover:scale-110 duration-500' loading='lazy' src={img} alt='' />
                </a>
                <p className='mt-4'>{title}</p>
                <a className='text-xs text-[#1DE9B6]' href={url}>Read more ...</a>
            </div>
          )
        })}
        </div>
    </div>
    
   </section>
  )
}

export default HomeArticles