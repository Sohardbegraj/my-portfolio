import React from 'react'

const Invalid = ({setShowInvalid}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-80 bg-gray-950 border-4 text-gray-200 p-20 rounded-lg shadow-md">
        
      <h1 className="text-2xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <p>type <code className='text-blue-400'>"-help"</code> to list the commands</p>
      <button 
        className="mt-8 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={() => setShowInvalid(!setShowInvalid)}> Close </button>
    </div>
  )
}

export default Invalid
