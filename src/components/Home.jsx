import React, {  useState } from 'react'
import Terminal from './Terminal'
import Chat from './chat'

const Home = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  return (
    <div className='bg-[url("./assets/bgwebp.webp")] bg-cover bg-no-repeat bg-center h-screen text-white font-mono flex'>
        <div
        className="flex flex-col items-center text-center text-white bg-transparent h-fit py-8 px-6 mx-0 lg:mt-48 lg:mx-96 mb-32 xl:w-6/12 w-full z-10 rounded-b-lg  ">
        {
          showTerminal && <Terminal setShowTerminal={setShowTerminal}/>
        }
        </div>
        
          <button
  className='md:bg-transparent bg-gray-950 absolute top-14 left-14 text-white md:text-xl text-xs  rounded-md'  onClick={()=>setShowTerminal(!showTerminal)}>
          <div className='flex items-center justify-center p-2'>
            <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" width="50px" height="50px" viewBox="0 0 24 24" version="1.1">
 <g transform="translate(0 -1028.4)">
  <path d="m3 1030.4c-1.1046 0-2 0.9-2 2v7 2 7c0 1.1 0.8954 2 2 2h9 9c1.105 0 2-0.9 2-2v-7-2-7c0-1.1-0.895-2-2-2h-9-9z" fill="#2c3e50"/>
  <path d="m3 2c-1.1046 0-2 0.8954-2 2v3 3 1 1 1 3 3c0 1.105 0.8954 2 2 2h9 9c1.105 0 2-0.895 2-2v-3-4-2-3-3c0-1.1046-0.895-2-2-2h-9-9z" transform="translate(0 1028.4)" fill="#34495e"/>
  <path d="m4 5.125v1.125l3 1.75-3 1.75v1.125l5-2.875-5-2.875zm5 4.875v1h5v-1h-5z" transform="translate(0 1028.4)" fill="#ecf0f1"/>
 </g>
</svg>
          </div>
          Terminal
        </button>
        <div className='absolute bottom-14 right-14 text-white text-xl py-2 lg:h-fit lg:w-fit '
        >
          <Chat/>
        </div>
    </div>
    
  )
}

export default Home
