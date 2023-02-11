import React from 'react'
import { Link,} from 'react-router-dom'
import './ecosystemCards.css'
import { motion} from "framer-motion";
function EcosystemCards(props) {
    const {title, imgUrl, discord, medium, website, twitter, id} = props.item
  return(
    <motion.article
    className="col-12 md:col-3"
    layout
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    style={{width: '100%'}}
>
            <div className='bg-[#ECF8F5] sm:w-full md:w-[303px] h-[162px] rounded-[15px] shadow-md  shadow-slate-400 hover:scale-95 duration-500' key={id}>
                <div className="flex pt-[24px] ml-2 gap-8">
                <div className=''>
                <Link to={`/ecosystem/${id}`}>
                    <img src={imgUrl}  alt='logo' className='e-logo'/>
                    </Link>
                </div>
                <div className='grid grid-flow-row'>
                <span className='text-[18px] font-bold text-black'>{title}</span>
                <div className='cursor-pointer py-2'>
                  <a target='_blank' rel="noreferrer" href={medium}>
                  <span><i className="bg-[#90E6D1] p-[3px] rounded-full ri-medium-line hover:opacity-[0.4] mx-2"></i></span>
                  </a>
                <a target='_blank' rel="noreferrer" href={discord}>
               <span><i className="bg-[#90E6D1] p-[3px] rounded-full ri-discord-line hover:opacity-[0.4] mx-2"></i></span>
               </a>
               <a target='_blank' rel="noreferrer" href={twitter}>
               <span><i className=" bg-[#90E6D1] p-[3px] rounded-full ri-twitter-line hover:opacity-[0.4] mx-2"></i></span>
               </a>
               <a target='_blank' rel="noreferrer" href={website}>
               <span><i className=" bg-[#90E6D1] p-[3px] rounded-full ri-global-line hover:opacity-[0.4] mx-2"></i></span>
               </a>
                </div>
                </div>
                <div>
                </div>
                </div>
                </div>
                </motion.article>
  ) 
 

}

export default EcosystemCards