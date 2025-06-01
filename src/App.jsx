
import './App.css'
import Home from './components/Home'
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950 text-7xl text-white font-mono">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className=''>
      <Home/>
         </div>
  )
}

export default App
