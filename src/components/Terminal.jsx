import React, { useRef, useState } from 'react'
import Searchbar from './searchbar'

const Terminal = ({setShowTerminal}) => {   
  return (
    <>
    <div  className='bg-gray-600 w-full max-w-[750px] flex justify-between h-8 rounded-t-lg font-mono' >
    <div className='flex justify-between items-center h-full bg-black px-4 w-1/3 rounded-t-xl ml-4 overflow-hidden '>
      <p className=' text-gray-500 bg-black md:text-lg text-sm'>Terminal</p>
      
    </div>
      <button className=' bg-red-500 rounded-t-lg px-2 ' onClick={()=>setShowTerminal(!setShowTerminal)}>Close</button>
    </div>
    <div className='text-mono w-full  max-w-[750px] bg-black p-4'>Welcome to my portfolio Type<span className='text-blue-400'> -help </span>for list of support command</div>
        
        <div className='bg-black xxl:w-4/5  max-w-[750px] w-full h-72 rounded-b-lg text-white overflow-hidden md:flex justify-start block md:px-8'>
          <span className='text-gray-300 text-xl font-mono'>C:\Users\sohard&gt;~</span>
          <Searchbar />
        </div>
    </>
  )
}

export default Terminal

