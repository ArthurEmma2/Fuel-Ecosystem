

import { useRef, useEffect, } from 'react'

import logo from '../../Assets/img/Logo/fuel_logo.webp'

import './Header.css'
import {NavLink, Link} from 'react-router-dom'
const NAV__LINKS = [
    {
        display: 'Home',
        url: '/' 
    },

    {
        display: 'Ecosystem',
        url: '/ecosystem' 
    },
    {
        display: 'Education',
        url: '/education' 
    },
    {
        display: 'Articles',
        url: '/articles' 
    },
    // {
    //     display: 'Podcast',
    //     url: '/podcast' 
    // },
  
    {
        display: 'Metrics',
        url: '/metrics' 
    },
    {
        display: 'Jobs',
        url: '/jobs' 
    },
  
   
]

function Header() {
const headerRef = useRef(null)

const menuRef = useRef(null)

useEffect(() => {
window.addEventListener('scroll',() => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header_shrink')
    }else{
        headerRef.current.classList.remove('header_shrink')
    }
})
return()=>{} 



},[])

const toggleMenu = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className='header'ref={headerRef}>
            <div className="navigation container">
               <img src={logo}  alt='logo' className='image'/>
                <div className="nav__menu" ref ={menuRef} onClick={toggleMenu}>
                    <ul className="nav__list">
                        { NAV__LINKS.map((item,index) =>(
                                    <li className="nav-item font-bold" key={index}>
                                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active': ""}>{item.display}</NavLink>
                                </li>
                             ))}
                    </ul>
                </div>
                <div className="">
                         {/* MOBILE MENU */}
                         <span className='mobile_menu'><i className="ri-menu-2-line" onClick={toggleMenu}></i></span>
                         
                </div>
                <div className='icons hidden md:flex gap-5 text-[30px] cursor-pointer text-white'>
              <a target='_blank' rel="noreferrer" href='https://twitter.com/FuelEcosystem_'>
               <span> <span className='text-[#1DE9B6] text-xl font-bold'>twitter</span> <i className="ri-twitter-line hover:opacity-[0.4]"></i></span>
               </a>
               </div>
            </div>
    </header>
  )
}

export default Header