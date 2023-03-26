import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Sidebar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <>
      <i className="text-white absolute fa-solid fa-bars-staggered md:hidden bg-violet-900 p-2 m-1 rounded-md" onClick={() => { setMenu(true) }}></i>
      {menu && <div className='bg-gray-800 h-[100vh] z-10 md:relative absolute w-3/5 lg:w-1/5 px-3 py-2 text-white space-y-2 shadow-lg shadow-white md:shadow-none'>
        <section className='text-violet-600 flex justify-between text-lg px-2'>
          <div className='flex space-x-2 justify-center items-center'>
            <img className='md:w-8 md:h-8 h-6 w-6' src={logo} />
            <p>WOW</p>
          </div>
          <div className='text-white md:hidden' onClick={() => { setMenu(false) }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </section>
        <div className='bg-violet-700 p-2 rounded-sm space-x-2 flex items-center'>
        <i class="fa-solid fa-server"></i>
          <p>Dashboard</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-regular fa-user"></i>
          <p>WOW Users</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-solid fa-video"></i>
          <p>Video Clips</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-solid fa-triangle-exclamation"></i>
          <p>Reported Content</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-solid fa-layer-group"></i>
          <p>Category</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-solid fa-circle-exclamation"></i>
          <p>Info Page</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-solid fa-message"></i>
          <p>FAQ</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-regular fa-bell"></i>
          <p>Push Notification</p>
        </div>
        <div className='px-2 space-x-2 flex items-center'>
        <i class="fa-solid fa-circle-user"></i>
          <p>Internal User</p>
        </div>
      </div>}
    </>
  )
}

export default Sidebar
