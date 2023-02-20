import React from 'react'
import  { article }  from '../Assets/data/Articles'
import '../Styles/contributrors.css'
import image from '../Assets/img/wall2-removebg-preview.webp'

function Articles() {
  return (
 <div className='container'>
 <div className=' flex-col lg:flex-row flex lg:justify-between items-center mt-52'>
 <div>
    <header className='text-4xl e-header font-bold tracking-[2px]'>Articles</header>
    <p className='font-extrabold text-[#1DE9B6] text-3xl lg:text-6xl w-full md:w-[750px]'>Discover all 
    the recent  news and articles  in the Fuel ecosystem</p>
 </div>
 <div className=''>
<img className='hidden md:flex' src={image} alt='' />
 </div>
 </div>
 <div>
 <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mt-32 gap-12'>

{article.map((item) =>{
    const {id, title, img, url} = item
  return(
    <div className='text-white' key={id}>
        <a href={url}>
        <img className='hover:scale-110 duration-500' loading='lazy' src={img} alt='' />
        </a>
        <p className='mt-4'>{title}</p>
        <a className='text-xs text-[#1DE9B6]' target="_blank" rel="noreferrer" href={url}>Read more ...</a>
    </div>
  )
})}
</div>
</div>
</div>

  )

}
export default Articles