import React from 'react'


function Button({filtered,button }) {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-1 grid-flow-row lg:grid-cols-1'>
      {
        button.map((cat, i) =>{
            return(

                <button className='e-btn' key={i} type='button' onClick={() => filtered(cat)}>{cat}</button>
                
            )
        })
      }
    </div>
  )
}

export default Button