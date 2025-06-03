import React from 'react';

const projects = [
  {
    title: 'NeuroNest',
    link: 'https://github.com/Sohardbegraj/NeuroNest',
    description:
      'A smart, personal space to capture and organize your most important links—your digital brain for ideas, knowledge, and inspiration.',
    tech: 'MERN',
    date: '2025',
    category: 'Web Development',
  },
  {
    title: 'Doodlepad',
    link: 'https://github.com/Sohardbegraj/Doodlepad',
    description:
      'Doodlepad is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.',
    tech: 'MERN',
    date: '2025',
    category: 'Web Development',
  },
  {
    title: (
      <>
        Chess.in <span className='text-xs text-rose-400'>(working)</span>
      </>
    ),
    link: 'https://github.com/Sohardbegraj/chess.in',
    description:
      'Fast, safe, and modern chess engine built with Rust. Blazing speed, zero-cost abstractions, and fearless concurrency—perfect for serious play.',
    tech: 'Rust',
    date: '2025',
    category: 'Rust',
  },
  {
    title: 'Portfolio',
    link: null,
    description:
      'A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS.',
    tech: 'React, Tailwind CSS',
    date: '2025',
    category: 'Web Development',
  },
];

const Project = ({ setShowProjects }) => {
  const handleToggle = () => {
    setShowProjects(false);
  };

  return (
    <div className='flex gap-10 backdrop-blur-md p-4 w-full h-fit md:h-screen flex-wrap justify-center items-center relative'>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className='bg-gray-800 text-white md:w-[600px] md:h-[450px] w-fit h-fit rounded-lg p-8 flex flex-col justify-between'
        >
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>{project.title}</h2>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:underline'
              >
                View Project
              </a>
            )}
          </div>
          <p className='text-gray-300 p-2'>{project.description}</p>
          <div className='flex justify-between'>
            <span className='text-sm text-gray-400'>Tech Stack : {project.tech}</span>
            <span className='text-sm text-gray-400'>Date: {project.date}</span>
          </div>
          <hr className='border-gray-600' />
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-400'>Project Category: {project.category}</span>
          </div>
        </div>
      ))}
      <button
        className='bg-rose-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-rose-700 transition duration-300 absolute top-4 right-4 z-20'
        onClick={handleToggle}
      >
        Close
      </button>
    </div>
  );
};

export default Project;
