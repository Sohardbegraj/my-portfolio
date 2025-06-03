import React from 'react'
import { motion } from 'framer-motion';
const Help = ( {setShowHelp}) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        className="w-screen max-w-[750px] bg-black text-white p-6 rounded-xl shadow-2xl outline-gray-50 border-2 border-gray-700"
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Help</h1>
          <button
            className="bg-red-400 hover:bg-red-600 text-xl font-bold p-1 rounded-full transition duration-300"
            onClick={() => setShowHelp(false)}
            aria-label="Close Help"
          >
            close
          </button>
        </div>
        <p className="md:text-xl mb-4">Available commands:</p>
        <ul className="list-disc pl-5 md:text-lg text-start space-y-1">
          <li>
            <code className="text-green-400">cd about</code> - Navigate to the About section
          </li>
          <li>
            <code className="text-green-400">cd projects</code> - Navigate to the Projects section
          </li>
          <li>
            <code className="text-green-400">cd contact</code> - Navigate to the Contact section
          </li>
          <li>
            <code className="text-green-400">cd skills</code> - Navigate to the Skills section
          </li>
          <li>
            <code className="text-green-400">cat resume</code> - View my resume
          </li>
          <li>
            <code className="text-green-400">cat github</code> - Visit my GitHub profile
          </li>
          <li>
            <code className="text-green-400">cat linkedin</code> - Visit my LinkedIn profile
          </li>
        </ul>
      </motion.div>
    </>
  )
}

export default Help
