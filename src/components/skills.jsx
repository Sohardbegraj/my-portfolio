import React from 'react';

const Skills = ({ showSkills }) => {
  const tools = [
    'Visual Studio Code', 'Git', 'GitHub', 'Postman', 'Figma',
    'Docker', 'Kubernetes', 'Prettier', 'npm', 'Yarn', 'Redux',
    'Axios', 'Bootstrap', 'Tailwind CSS', 'Material-UI',
    'TypeScript', 'Prisma', 'Firebase', 'MongoDB Compass'

  ];

  const development = [
    'C++', 'C', 'Python', 'JavaScript', 'HTML/CSS',
    'React', 'Next.js','Node.js', 'Express.js', 'MongoDB',
    'Git', 'GitHub', 'REST APIs',  'WebSockets', 'Docker', 'Kubernetes', 'Firebase', 'PostgreSQL',
     'MySQL','Rust', 'Tailwind CSS', 'TypeScript','Prisma',

  ];

  const handleToggle = () => {
    showSkills(!showSkills);
  }

  return (

    <>
    {showSkills && (
        <div className='h-screen'>
        <div className='bg-[#100c08] outline-gray-50 border-2 text-white md:w-[670px] h-[80px] w-screen z-10 flex justify-between rounded-t-md p-4 text-xl font-mono'>Skills
            <button
            className='bg-rose-500 text-white text-center p-1 rounded-lg  hover:bg-rose-700 transition duration-300 ' 
            onClick={handleToggle}>
            Close
          </button>
      </div>
    <div className="bg-black outline-gray-50 border-2 md:w-[670px] w-screen  text-white px-8 py-12">

      {/* Tools & Development Sections */}
      <div className="flex flex-col md:flex-row gap-12 ">
        {/* Tools */}
        <div>
          <h2 className="text-sm md:text-2xl font-mono mb-2">TOOLS</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map(tool => (
              <span
                key={tool}
                className="border cursor-pointer border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Development */}
        <div>
          <h2 className="text-sm md:text-2xl font-mono mb-2">DEVELOPMENT</h2>
          <div className="flex flex-wrap gap-3">
            {development.map(dev => (
              <span
                key={dev}
                className="border cursor-pointer border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
              >
                {dev}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    )
    }
    </>
    
  );
};

export default Skills;
