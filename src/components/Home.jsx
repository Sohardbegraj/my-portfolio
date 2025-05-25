import React from 'react'
import Navbar from './Navbar'
import Terminal from './terminal'



const Home = () => {
  return (
    <div class=" px-6 py-8 flex flex-col items-center text-center bg-teal">
    <Navbar/>
      <div className='bg-amber text-white xl:w-6/12 w-full z-10 flex justify-start rounded-md p-4 font-mono'>Home</div>
    <div class="flex flex-col items-center text-center bg-red-300 h-fit py-8 px-6 mx-12 mb-32 xl:w-6/12 w-full z-10 rounded-lg">
        <div className='text-5xl grid-col-span-6 pt-8 px-6 font-mono'> hi! I'm Sohard </div>
        <div className='font-mono mb-4'>web-dev | dsa | devops | blockchain</div>
        <Terminal/>
        </div>
        
    </div>
  )
}

export default Home
