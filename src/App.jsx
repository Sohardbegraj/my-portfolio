
import './App.css'
import Home from './components/Home'
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950 text-2xl text-white font-mono">
       <Loading/>
      </div>
    );
  }
  return (
    <div className="bg-gray-950 text-white font-mono min-h-screen">
      <Home/>
         </div>
  )
}

export default App
