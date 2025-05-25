import React from 'react'
import Wave from 'react-wavify'
const Footer = () => {
  return (
    <div className='sm:fixed bottom-0 right-0 left-0 h-1/3'>
       <div className='-z-0'> <Wave fill='#393053 '
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.25,
          points: 3
        }}
  /></div>
        <div className='-z-10 -translate-y-20'><Wave fill='#18122B'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.25,
          points: 3
        }}
  /></div>

  <footer class="bg-amber -translate-y-24 ">
    <div class="container px-6 py-8 mx-auto">
        <div class="flex flex-col items-center text-center">
            <a href="#" className='text-gray-400'>
                lorem
            </a>
            <div class="flex flex-col my-4 sm:flex-row sm:items-center sm:justify-center">
                

                <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Contact</button>
            </div>
        </div>
</div>
  <hr class="my-10 border-gray-700" />

  
    </footer>
    </div>
  )
}

export default Footer
