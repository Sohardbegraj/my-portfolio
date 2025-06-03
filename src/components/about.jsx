import React from "react";

export default function About({ setShowAbout }) {
  const handleClose = () => {
    setShowAbout(!setShowAbout);
  };
  return (
    <div >
    <button
      className='bg-rose-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-rose-700 transition duration-300 absolute top-4 right-4 z-20'
          onClick={handleClose} 
          >
            Close
          </button>
    <div className="h-screen w-screen backdrop-blur-2xl  text-white md:px-36 lg:px-60 md:py-6 flex flex-col lg:flex-row gap-6">
      {/* Left Sidebar */}
      <div className="md:max-w-sm h-fit sm:w-screen bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/140617987?v=4"
            alt="Sohard Begraj"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700"
          />
          <h1 className="mt-4 text-xl font-bold font-mono">Sohard Begraj</h1>
          <p className="text-gray-400 font-mono">Sohardbegraj · he/him · INDIA</p>
          <p className="text-center mt-2 text-sm font-mono">
            Hello, I'm Sohard Begraj, Mathematics and Computing undergrad student at the National Institute of Technology Hamirpur
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Leetcode Stats</h2>
          <img
                src="https://leetcard.jacoblin.cool/sohard16begraj"
                alt="LeetCode Stats"
                className="w-full mt-4 rounded-xl"
/>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">GitHub Stats</h2>
          <img
            src="https://github-readme-stats.vercel.app/api?username=sohardbegraj&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="w-full mt-4 rounded-xl"
          />
        </div>
        </div>
      

      {/* Right Main Section */}
      <div className="bg-gray-800 h-fit  p-12 rounded-2xl shadow-lg text-left">
        <h2 className="text-2xl font-mono">Hi there, I'm Sohard Begraj</h2>
        <ul className="mt-2 gap-1 font-mono space-y-1">
          <li> Student of Mathematics and Computing</li>
          <li> Exploring the world of programming with a passion for learning new things</li>
        </ul>
<hr className="bg-gray-700 m-8"/>
        <div className="mt-8">
          <h2 className="text-2xl font-mono">Tech Proficiency</h2>
          <ul className=" font-mono mt-2 space-y-1">
            <li><strong>Languages:</strong> Python, JavaScript, (learning Rust),Cpp,</li>
            <li><strong>Web:</strong> MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li><strong>CS Interests:</strong> Data Structures & Algorithms, DBMS, OPPS</li>
          </ul>
        </div>
        <hr className="bg-gray-700 m-8"/>
        <div className="mt-8">
          <h2 className="text-2xl font-mono my-4">What I'm Up To</h2>
          <ul className="font-mono space-y-1">
            <li> Chess enthusiast (working on a Rust chess engine as an idea!)</li>
            <li> Solving DSA challenges and LeetCode problems regularly</li>
            <li> Building projects </li>
          </ul>
        </div>
        <hr className="bg-gray-700 m-8"/>
        <p className="mt-12 text-gray-400">
          Thanks for visiting my portfolio! Let's connect and learn together. 
        </p>
      </div>
    </div>
    </div>
  );
}
