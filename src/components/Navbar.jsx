import React from 'react'
import { motion } from "motion/react"
import Logo from './logo'


 
const Navbar = () => {
  return (
    <div className='w-9/12 flex justify-between'>
    <Logo/>
    <div className='z-50'>
      {/* <motion.div drag style={box} /> */}
    </div>
</div>
  )
}
const box = {
    width: 50,
    height: 50,
    backgroundColor: "#ffff",
    borderRadius: 50,
    
}
export default Navbar
