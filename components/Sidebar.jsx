import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import {TbRectangle, TbCircle, TbTriangle} from 'react-icons/tb'

import SearchBar from './SearchBar'

const Sidebar = () => {
  return (
    <div className='fixed h-screen bg-black border-r-gray p-4 text-white shadow-xl'>
      <div className='mb-4'> 
        <span className='text-extrabold text-lg'>Cake </span><span className='text-gray-500 text-sm'>Dashboard</span>
      </div>
      <SearchBar/>
      <span className='text-gray-500 mb-4'>Menu</span>

      <div className='flex gap-5 items-center hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <TbRectangle size={25}/>
        <div className='w-full flex items-center justify-between'>
          <div>Overview</div>
          <AiOutlineDown className='cursor-pointer'/>
        </div>
      </div>

      <div className='flex gap-5 items-center hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <TbRectangle size={25}/>
        <div className='w-full flex items-center justify-between'>
          <div>Transactions</div>
          <AiOutlineDown className='cursor-pointer'/>
        </div>
      </div>

      <div className='flex gap-5 items-center hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <TbCircle size={25}/>
        <div className='w-full flex items-center justify-between'>
          <div>Schedule Alerts</div>
          <AiOutlineDown className='cursor-pointer'/>
        </div>
      </div>

      <div className='flex gap-5 items-center hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <TbTriangle size={25}/>
        <div className='w-full flex items-center justify-between'>
          <div>Cashstack</div>
          <AiOutlineDown className='cursor-pointer'/>
        </div>
      </div>

      <div className='flex items-center justify-between hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <div>Overview </div>
        <AiOutlineDown className='cursor-pointer'/>
      </div>

      <div className='flex items-center justify-between hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <div>Overview </div>
        <AiOutlineDown className='cursor-pointer'/>
      </div>

      <div className='flex items-center justify-between hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <div>Overview </div>
        <AiOutlineDown className='cursor-pointer'/>
      </div>

      <div className='flex items-center justify-between hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <div>Overview </div>
        <AiOutlineDown className='cursor-pointer'/>
      </div>

      <div className='flex items-center justify-between hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <div>Overview </div>
        <AiOutlineDown className='cursor-pointer'/>
      </div>

      <div className='flex items-center justify-between hover:bg-gray-900 p-2 rounded-lg mb-2'>
        <div>Overview </div>
        <AiOutlineDown className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Sidebar