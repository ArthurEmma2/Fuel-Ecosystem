import React from 'react'

function Footer() {
  return (
    <section className='bg-gray-700 h-20 w-full overflow-x-hidden '>
        <div className='container flex justify-around md:justify-between mx-5 pt-8 text-white items-center'>
            <a target="_blank" rel="noreferrer" href = "https://github.com/ArthurEmma2/Fuel-Ecosystem">
            <p className=' cursor-pointer text-xl'>Github <i class="ri-github-fill"></i></p> <i class="fa fa-github" aria-hidden="true"></i></a>
            <p className = "text-sm">copyright 2023</p>
        </div>
    </section>
  )
}

export default Footer