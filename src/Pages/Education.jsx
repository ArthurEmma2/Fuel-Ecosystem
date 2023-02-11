import React,{useEffect} from 'react'
import heroImage from '../Assets/img/Fuel pictures/projects/Mask group11.webp'
import img1 from '../Assets/img/ed3-removebg-preview.png'
import img2 from '../Assets/img/Ec1.png'
import img from '../Assets/img/Work_cooperation_2.png'
import acad from '../Assets/img/docs.svg'
import docs from '../Assets/img/docs2.svg'
import move from '../Assets/img/Fuel pictures/projects/swayss-removebg-preview.png'
import speed from '../Assets/img/rocket-removebg-preview.png'
import  Aos  from 'aos';

function Education() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
  <section className='container mt-12'>
    <div className='sm:grid pt-20 grid-cols-1 md:grid-cols-1 grid lg:flex container items-center'>
      <div className=''>
          <h4  className='text-[#90E6D1] e-header text-3xl tracking-[2px] text-center lg:text-left'>Learn how to</h4>
         <h1 className=' text-2xl leading-9 md:text-6xl text-blue-400 md:leading-[60px] font-bold text-center lg:text-left'>
              build Web3 dApps on Fuel Blockchain.
          </h1> 
        <p className='py-4 text-[#90E6D1] opacity-80 mt-4 tracking-[2px] w-full text-center lg:text-left  md:w-[600px]'>
        Fuel is the fastest execution layer for the modular blockchain stack that delivers maximum
         security and the highest flexible throughput for decentralized applications.</p>
      </div>

     

      <div className='relative top-[115px]'>
      <img width='880px' src={heroImage}  className=' hidden md:flex' alt='' />
      </div>
    </div>
        <h1 className='e-header text-4xl text-center md:text-5xl lg:text-6xl font-bold my-32'>Why learn blockchain & Fuel?</h1>

        <div className='grid grid-cols-1 md:flex items-center gap-20 justify-center overflow-x-hidden'>
            <div className=''data-aos='fade-left'>
            <img src={img2} width='200px' alt='edu' />
            
              <h1 className='e-header text-xl opacity-70 font-bold'> Decentralize.</h1><br />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7 w-full  md:w-[600px]'>
              Decentralized: In a blockchain context, decentralization means that
               the network operates independently from the control of a centralized 
               intermediary, usually evidenced by a
               widely distributed global network of nodes that furnish the network’s operation.
                   </p> <br />
            </div>
            <div className=''data-aos='fade-right'>
            <img src={img} width='200px' alt='edu' />
              <h1 className='e-header text-xl opacity-70 font-bold'>Fuel Virtual Machine (Fuel VM)</h1><br />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7  '>
              A blockchain architecture optimized to lower inefficiencies in conventional 
              virtual machine designs while expanding the developer design space. 
              Built upon lessons learned and real-world insights.
                   </p> <br />
            </div>
        </div>
        <div className='grid grid-cols-1 md:flex items-center gap-20 justify-center overflow-x-hidden'>
            <div className=''data-aos='fade-left'>
            <img src={speed} width='200px' alt='edu' />
              
              <h1 className='e-header text-xl opacity-70 font-bold'>Parallel transaction execution</h1><br />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7 w-full md:w-[600px]'>
              Fuel boasts unparalleled processing power through its parallel execution of transactions via 
              UTXO-based strict state access lists. This allows Fuel to utilize multiple threads and cores 
              of your CPU, maximizing its capabilities and outpacing single-threaded blockchains.
               The result is increased computational ability, 
              state access, and transaction speed.
                   </p> <br />
            </div>
     

            <div className=''data-aos='fade-right'>
            <img className='e-header' src={move} width='200px' alt='edu' />
           
              <h1 className='e-header text-xl opacity-70 font-bold'>Sway Language</h1><br />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7  w-full md:w-[550px]'>
              Fuel provides a powerful and sleek developer experience with our own domain-specific language,
               called Sway, and a supportive toolchain, called Forc. Our development environment retains the benefits of 
               smart contract languages like Solidity, while adopting the paradigms introduced in the Rust tooling ecosystem.
                   </p> <br />
            </div>
        </div>

        <div className='my-32'>
        <h1 className='e-header text-4xl text-left md:text-3xl lg:text-3xl font-bold mt-48 mb-32'>How would you like to get started?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 '>
          <div className='font-bold text-[#90E6D1] border w-full md:w-[400px] p-5 border-zinc-200 shadow-md  shadow-slate-400 hover:scale-95 duration-500'>
            <img src={img1} width='80px' alt=''/>
            <h2 className='font-bold tracking-[2px]'>Learn Fuel development on Github</h2>
            <p className='opacity-70 tracking-[2px] text-sm leading-6'>Read up on core concepts and the <br/>
            Fuel stack on Github</p>
            <a target='_blank' rel="noreferrer" href='https://github.com/FuelLabs'>
            <button className='text-blue-400 mt-2'>Learn More<i class="ri-arrow-right-up-line"></i></button>
            </a>
          </div>
          <div className='font-bold text-[#90E6D1] border w-full lg:w-[400px] p-5 border-zinc-200 shadow-md  shadow-slate-400 hover:scale-95 duration-500'>
            <img src={acad} width='40px' alt=''/>
            <h2 className='font-bold tracking-[2px]'>Fuel Academy</h2>
            <p className='opacity-70 tracking-[2px] text-sm leading-6'>Fuel Academy in providing targeted educational materials for different stakeholder groups in the ecosystem,<br/></p>
            <button className='text-blue-400 mt-2'>Coming Soon...</button>
          </div>
          <div className='font-bold text-[#90E6D1] border w-full md:w-[400px] p-5 border-zinc-200 shadow-md  shadow-slate-400 hover:scale-95 duration-500'>
            <img src={docs} width='40px' alt=''/>
            <h2 className='font-bold tracking-[2px]'>Learn Fuel development with docs</h2>
            <p className='opacity-70 tracking-[2px] text-sm leading-6'><br/>Learn about the core infrastructure including Runtime, State, P2P connections, routing, and more.</p>
            <a target='_blank' rel="noreferrer" href='https://fuellabs.github.io/fuel-docs/master/'>
            <button className='text-blue-400 mt-2'>Learn More<i class="ri-arrow-right-up-line"></i></button>
            </a>
            
          </div>
        </div>
        </div>
  </section>
   
  )
}

export default Education