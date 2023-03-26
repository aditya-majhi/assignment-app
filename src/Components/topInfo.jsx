import React, { useEffect, useState } from 'react'
import Table from './table';

const TopInfo = () => {

  const [stats, setStats] = useState();

  useEffect(() => {
    console.log("entered");
    fetch("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10").then((response) =>
      response.json()).then((data) => {
        setStats(data)
      })
  }, []);

  return (
    <div className='w-[100vw] h-full'>
      <div className='flex flex-wrap justify-around rounded-md bg-gray-800 h-fit m-4 p-4'>
        <section className='space-y-6'>
          <div className='flex space-x-3'>
          <i className="fa-solid fa-download h-6 md:h-12 w-6 md:w-12 md:text-2xl flex justify-center bg-white rounded-full items-center"></i>
            <div className='text-white'>
              <h2 className='text-sm md:text-lg font-bold'>{stats && stats.data.totalInstall}</h2>
              <p className='text-[8px] md:text-sm'>App Installed</p>
            </div>
          </div>

          <div className='flex space-x-3'>
          <i className="fa-solid fa-square-xmark h-6 md:h-12 w-6 md:w-12 md:text-2xl flex justify-center bg-white rounded-full items-center"></i>
            <div className='text-white'>
              <h2 className='text-sm md:text-lg font-bold'>{stats && stats.data.totaluninstall}</h2>
              <p className='text-[8px] md:text-xs'>App Un-Installed</p>
            </div>
          </div>
        </section>

        <section className='space-y-6'>
          <div className='flex space-x-3'>
            <div className='w-6 md:w-12 h-6 md:h-12 rounded-full bg-white'></div>
            <div className='text-white'>
              <h2 className='text-sm md:text-lg font-bold'>{stats && stats.data.activeinstall}</h2>
              <p className='text-[8px] md:text-xs'>Active Installs</p>
            </div>
          </div>

          <div className='flex space-x-3'>
            <div className='w-6 md:w-12 h-6 md:h-12 rounded-full bg-white'></div>
            <div className='text-white'>
              <h2 className='text-sm md:text-lg font-bold'>{stats && stats.data.aliveappusers}</h2>
              <p className='text-[8px] md:text-xs'>Alive Apps Users</p>
            </div>
          </div>
        </section>

        <section className='space-y-6'>
          <div className='flex space-x-3'>
            <div className='w-6 md:w-12 h-6 md:h-12 rounded-full bg-white'></div>
            <div className='text-white'>
              <h2 className='text-sm md:text-lg font-bold'>{stats && stats.data.churn}</h2>
              <p className='text-[8px] md:text-xs'>Churn Rate</p>
            </div>
          </div>

          <div className='flex space-x-3'>
            <div className='w-6 md:w-12 h-6 md:h-12 rounded-full bg-white'></div>
            <div className='text-white'>
              <h2 className='text-sm md:text-lg font-bold'>{stats && stats.data.alivechurn}</h2>
              <p className='text-[8px] md:text-xs'>Alive Churn Rate</p>
            </div>
          </div>
        </section>
      </div>
      <Table />
    </div>
  )
}

export default TopInfo
