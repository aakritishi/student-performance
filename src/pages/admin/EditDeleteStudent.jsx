import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EditDeleteStudent = () => {
  return (
    <div className="w-full overflow-x-auto overflow-y-auto min-h-full mt-4">
        <h1 className='text-lg my-2 font-medium'>Student Details</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="border-y border-gray-300">
            <th className="px-4 py-3 text-left">Rank</th>
            <th className="px-4 py-3 text-left">Student Name</th>
            <th className="px-4 py-3 text-left">Grade</th>
            <th className="px-4 py-3 text-left">Performance</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className='odd:bg-amber-100'>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">1</td>
            <td className="px-4 py-3">test</td>
            <td className="px-4 py-3">A+</td>
            <td className="px-4 py-3">Excellent</td>
            <td className='px-4 py-3 flex items-center gap-4'>
              <FaEdit className="text-blue-500 size-6" />
              <MdDelete className="text-red-500 size-6" />
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">2</td>
            <td className="px-4 py-3">test test</td>
            <td className="px-4 py-3">A</td>
            <td className="px-4 py-3">Very Good</td>
            <td className='px-4 py-3 flex items-center gap-4'>
              <FaEdit className="text-blue-500 size-6" />
              <MdDelete className="text-red-500 size-6" />
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">3</td>
            <td className="px-4 py-3">new</td>
            <td className="px-4 py-3">A</td>
            <td className="px-4 py-3">Very Good</td>
            <td className='px-4 py-3 flex items-center gap-4'>
              <FaEdit className="text-blue-500 size-6" />
              <MdDelete className="text-red-500 size-6" />
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">4</td>
            <td className="px-4 py-3">new test</td>
            <td className="px-4 py-3">B+</td>
            <td className="px-4 py-3">Good</td>
            <td className='px-4 py-3 flex items-center gap-4'>
              <FaEdit className="text-blue-500 size-6" />
              <MdDelete className="text-red-500 size-6" />
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">5</td>
            <td className="px-4 py-3">abc</td>
            <td className="px-4 py-3">B+</td>
            <td className="px-4 py-3">Good</td>
            <td className='px-4 py-3 flex items-center gap-4'>
              <FaEdit className="text-blue-500 size-6" />
              <MdDelete className="text-red-500 size-6" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditDeleteStudent;