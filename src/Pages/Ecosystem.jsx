import React,{useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../Components/Filter/Button'
import {  ECOSYSTEM__DATA } from '../Assets/data/data'
import EcosystemCards from '../Components/UI/ecosystemCards/EcosystemCards'
import {AnimatePresence, motion} from "framer-motion";


const  allCategories = ['All', ...new Set(ECOSYSTEM__DATA.map(item =>  item.category))]
console.log(allCategories)


function Ecosystem() {
  const {cat} = useParams()
//Search Filter State
  const [filter, setFilter] = useState('')
  const [project, setProject] = useState(ECOSYSTEM__DATA)
  const [buttons, setButtons] = useState(allCategories)


  const filtered = (button) =>{
      if(button === 'All'){
        setProject(ECOSYSTEM__DATA)
        return;
      }

    const filteredData = ECOSYSTEM__DATA.filter(item => item.category === button)
    setProject(filteredData)
  }



//Search function


const SearchText = (event) =>{
  setFilter(event.target.value)
}

let dataSearch =project.filter(item =>{
  return Object.keys(item).some(key =>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
)
  
})





  return (

   <section className='mt-52'>
    
    <div className='container'>
       <div className='text-center items-center'>
        <h2 className='e-header text-4xl text-center md:text-5xl lg:text-6xl mb-3 font-bold' > The driven power is building</h2>
        <p className='text-white opacity-70 text-[15px] text-center md:text-[20px] font-bold tracking-wider my-8'>Your guide to what’s live today and coming soon on Fuel!</p>
        <div className='grid grid-flow-col items-center justify-center mt-10 gap-10'>
          <a target='_blank' rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSc1T6M3Hix12fLQIBiUIQCfg-V4uNiZoHrVKn656-_L1Keoeg/viewform' >
        <button className='text-white text-[8px]  md:text-[16px] bg-transparent  shadow-slate-400 shadow-sm p-3 rounded-[15px] btn_h'>Submit your project</button>
        </a>
         <div className='text-white  text-[10px] md:text-[16px]  shadow-slate-400 shadow-sm p-3 rounded-[15px]'>
        <i className="ri-search-line mx-3"></i>

        <input type='text'  placeholder='Search project by name' className='bg-transparent outline-none border-none ' value={filter} onChange={SearchText.bind(this)}/>

        </div>  
        </div>
      </div>

      <div>
      <h1 className='text-white text-center text-5xl font-bold mt-auto md:mt-52'>{cat}</h1>
      </div>
        <div className='text-center grid grid-cols-1 lg:flex pb-24 gap-14'>
            <div className=" text-white font-bold  text-2xl gap-10 mt-[132px]">
                    <Button filtered={filtered} button={buttons}></Button>
        
              </div>
              <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-3 justify-between items-center mt-auto md:mt-32 gap-12'>
              {
              dataSearch.map((item, id) =>{
          return(
            <motion.div
            layout   >
            <AnimatePresence>

                <EcosystemCards item={item} key={id} />
                </AnimatePresence>
                    </motion.div>
          )
          
        })}
              
              </div>

            </div>
        </div>
            

   </section>
  )
}

export default Ecosystem