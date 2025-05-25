import React, { useState } from 'react'


const Terminal = () => {
  return (
    <>
    <div  className='bg-silver xxl:w-4/5 w-full h-8 rounded-t-lg' ></div>
        <div className='bg-black xxl:w-4/5 w-full h-80 rounded-b-lg text-white overflow-hidden md:flex justify-start block px-8'>
          <span className='text-gray-300'>C:\Users\sohard:$~</span>
          <input type='text' autoComplete='off' className='bg-transparent mx-4 border-none h-8 font-mono text-xl outline-none '>
         
          </input>
        </div>
    </>
  )
}

export default Terminal
