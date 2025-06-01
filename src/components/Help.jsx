import React from 'react'

const Help = ( {setShowHelp}) => {
  return (
    <>
      <div className="w-screen max-w-[750px] bg-black text-white p-4 rounded-lg shadow-lg outline-gray-50 border-2"draggable>
        <h1 className="text-2xl font-bold mb-4">Help</h1>
        <p className='md:text-xl mb-4'>Available commands:</p>
        <ul className="list-disc pl-5 md:text-lg text-start">
          <li><code className='text-green-500'>cd about</code> - Navigate to the About section</li>
          <li><code className='text-green-500'>cd projects</code> - Navigate to the Projects section</li>
          <li><code className='text-green-500'>cd contact</code> - Navigate to the Contact section</li>
          <li><code className='text-green-500'>cd skills</code> - Navigate to the Skills section</li>
          <li><code className='text-green-500'>cat resume</code> - View my resume</li>
          <li><code className='text-green-500'>cat github</code> - Visit my GitHub profile</li>
          <li><code className='text-green-500'>cat linkedin</code> - Visit my LinkedIn profile</li>
        </ul>
         <button 
        className="mt-8 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={() => setShowHelp(false)}> Close </button>
      </div>
     
    </>
  )
}

export default Help
