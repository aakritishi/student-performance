import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TopSection = () => {
  return (
    <div className='font-sans'>
        <h1 className='text-lg text-gray-800 font-semibold mb-1'>Welcome User!</h1>
        <h2 className='text-lg text-gray-600 font-normal mb-4'>Here's what's happening with your college student today.</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-9 gap-3 w-[65%]'>
            <div className='p-4 mt-2 mb-5 rounded shadow-sm border border-gray-300'>
                <FaUsers className='size-6 mb-4 text-[#125887]'/>
                <h1 className='text-sm font-normal'>Total Students</h1>
                <h2 className='text-4xl font-semibold'>260</h2>
            </div>
            <div className='p-4 mt-2 mb-5 rounded shadow-sm border border-gray-300'>
                <FaCalendarCheck className='size-6 mb-4 text-[#125887]'/>
                <h1 className='text-sm font-normal'>Attendance Rate</h1>
                <h2 className='text-4xl font-semibold'>88%</h2>
            </div>
            <div className='p-4 mt-2 mb-5 rounded shadow-sm border border-gray-300'>
                <FaStar className='size-6 mb-4 text-[#125887]'/>
                <h1 className='text-sm font-normal'>Average Grade Score</h1>
                <h2 className='text-4xl font-semibold'>60</h2>
            </div>
        </div>
    </div>
  )
}

export default TopSection