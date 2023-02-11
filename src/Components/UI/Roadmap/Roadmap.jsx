import React,{useState,useEffect} from 'react'

import  Aos  from 'aos';


import './roadmap.css'
function ReadMore({children = 0}) {

    const text = children;

    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 0) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return(
        <p>
            {result}
            <span className="text-blue-300 px-2 sm:text-[6px] md:text-sm" onClick={toggleIsShow}>
                {isShow ? "Read More" : "Read Less"}
            </span>
        </p>
    )

}


function Roadmap() {
    useEffect(() =>{
        Aos.init({duration:2000})
      },[])
  return (
    <section className='container mt-64 pb-10'>
        <h2 className='text-4xl road__header text-left md:text-6xl mb-32 font-bold'>ROADMAP</h2>
    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 overflow-x-hidden">
   {/* Stack 1 */}
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-transparent shadow-sm shadow-slate-500 rounded-md p-4 md:pl-4"data-aos='flip-left'>
            <h1 className="text-white text-xl font-medium py-2 q-title">Q1 2023</h1>
            <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'>  Become a validator node on the aptos mainnet</h2>
                <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px] mb-4">
                <ReadMore>
                    Dapptos wants to become a validator on the Aptos blockchain to use the rewards
                    to finance new community initiatives and reward contributors
                    </ReadMore>
                </p>
                <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'>  Start AMA and twitter space</h2>
            <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px] mb-4">
            <ReadMore>
            Being close to the community and the ecosystem is one of our priorities, the
            twitter space and AMA will serve to discover projects and discuss on different
            topic voted by the community
            
            </ReadMore> </p>
                <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'>  Partnership with Aptos ecosystem projects</h2>
            <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px]">
            <ReadMore>
            Strengthen our presence and connect with as many projects to keep our
                community informed and offer new experience
            
            </ReadMore> </p>
        </div>
    </div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-white"></div>
        <div className="absolute w-6 h-6 rounded-full bg-[#1DE9B6] z-1 text-black text-center">Q1</div>
    </div>
    <div className="col-span-4 w-full h-full"></div>


   {/* stack 2 */}
    <div className="col-span-4 w-full h-full"></div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1  bg-white"></div>
        <div className="absolute w-6 h-6 rounded-full bg-[#1DE9B6] z-1 text-black text-center">Q2</div>
    </div>
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full  bg-transparent shadow-sm shadow-slate-500 rounded-md p-4 md:pl-4" data-aos='flip-left'>
            <h1 className="text-white text-xl font-medium py-2 q-title">Q2 2023</h1>
            
            
                <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'>Implementation of the airdrop section on Dapptos View</h2>
                <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px] mb-4">
                <ReadMore>
                            Once the Aptos mainnet will be live we will propose airdrop in parenatiat with
                            the cosysrtem projects to reward the community
                    </ReadMore>
                </p>
                <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'> Ambassadors program management</h2>
            <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px] mb-4">
            <ReadMore>
            We will provide a service for all projects interested in offering an ambassador
                    program to their community
            
            </ReadMore> </p>
                <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'> Create community events</h2>
            <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px] mb-4">
            <ReadMore>
            Strengthen our presence and connect with as many projects to keep our
                community informed and offer new experience
            
            </ReadMore> </p>
        
        </div>
    </div>

    {/* Stack 3 */}
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-transparent shadow-sm shadow-slate-500 rounded-md p-4 md:pl-4"data-aos='fade-right'>
            <h1 className="text-white text-xl font-medium py-2 q-title">Q3 2023</h1>
            <h2 className='text-[14px] text-white md:text-white md:text-lg font-bold my-1'> Creation of the DAO (roadmap coming soon)</h2>
                <p className="text-gray-100 sm:text-sm text-xs tracking-[1.7px] mb-4">
                <ReadMore>
                Becoming a Dao will be a natural step for us to promote the momentum of the
                    community and dynamize the ecosystem in general
                    </ReadMore>
                </p>
        </div>
    </div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1  bg-white"></div>
        <div className="absolute w-6 h-6 rounded-full bg-[#1DE9B6] z-1 text-black text-center">Q3</div>
    </div>
    <div className="col-span-4 w-full h-full"></div>

</div>
</section>
  )
}

export default Roadmap