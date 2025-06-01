import React, { useState } from 'react';

const Project = ({setShowProjects}) => {
   // true = visible

  const handleToggle = () => {
    setShowProjects(!setShowProjects);
  };

  return (
    <>
      { setShowProjects && (
        <div className='flex gap-10 backdrop-blur-md p-4 w-full h-fit md:h-screen flex-wrap justify-center items-center relative'>  
          {/* Project Cards */}
          <div className='bg-gray-800 text-white md:w-[600px] md:h-[450px] w-fit h-fit rounded-lg p-8 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>NeuroNest</h2>
              <a href='https://github.com/Sohardbegraj/NeuroNest' target='_blank' className='text-blue-400 hover:underline'>View Project</a>
            </div>
            <p className='text-gray-300 p-2'>
              A smart, personal space to capture and organize your most important links—your digital brain for ideas, knowledge, and inspiration.
            </p>
            <div className='flex justify-between'>
              <span className='text-sm text-gray-400'>Tech Stack : MERN</span>
              <span className='text-sm text-gray-400'>Date: 2025</span>
            </div>
            <hr className='border-gray-600' />
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-400'>Project Category: Web Development</span>
            </div>
          </div>

          <div className='bg-gray-800 text-white md:w-[600px] md:h-[450px] w-fit h-fit rounded-lg p-8 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>Doodlepad</h2>
              <a href='https://github.com/Sohardbegraj/Doodlepad' target='_blank' className='text-blue-400 hover:underline'>View Project</a>
            </div>
            <p className='text-gray-300 p-2'>
              Doodlepad is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.
            </p>
            <div className='flex justify-between'>
              <span className='text-sm text-gray-400'>Tech Stack : MERN</span>
              <span className='text-sm text-gray-400'>Date: 2025</span>
            </div>
            <hr className='border-gray-600' />
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-400'>Project Category: Web Development</span>
            </div>
          </div>

          <div className='bg-gray-800 text-white md:w-[600px] md:h-[450px] w-fit h-fit rounded-lg p-8 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>
                Chess.in <span className='text-xs text-rose-400'>(working)</span>
              </h2>
              <a href='https://github.com/Sohardbegraj/chess.in' target='_blank' className='text-blue-400 hover:underline'>View Project</a>
            </div>
            <p className='text-gray-300 p-2'>
              Fast, safe, and modern chess engine built with Rust. Blazing speed, zero-cost abstractions, and fearless concurrency—perfect for serious play.
            </p>
            <div className='flex justify-between'>
              <span className='text-sm text-gray-400'>Tech Stack : Rust</span>
              <span className='text-sm text-gray-400'>Date: 2025</span>
            </div>
            <hr className='border-gray-600' />
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-400'>Project Category: Rust</span>
            </div>
          </div>
          <div className='bg-gray-800 text-white md:w-[600px] md:h-[450px] w-fit h-fit rounded-lg p-8 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl font-bold'>Portfolio</h2>
            </div>
            <p className='text-gray-300 p-2'>
              A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS.
            </p>
            <div className='flex justify-between'>
              <span className='text-sm text-gray-400'>Tech Stack : React, Tailwind CSS</span>
              <span className='text-sm text-gray-400'>Date: 2025</span>
            </div>
            <hr className='border-gray-600' />
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-400'>Project Category: Web Development</span>
            </div>
            </div>
          <button
            className='bg-rose-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-rose-700 transition duration-300 absolute top-4 right-4 z-20'
            onClick={handleToggle}
          >
            Close
          </button>
        </div>
      ) 
      }
    </>
  );
};

export default Project;
