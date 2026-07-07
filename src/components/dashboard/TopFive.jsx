import React from 'react';

const TopFive = () => {
  return (
    <div className="w-full overflow-x-auto mt-4">
        <h1 className='text-lg my-2 font-medium'>Top 5 Students</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="border-y border-gray-300">
            <th className="px-4 py-3 text-left">Rank</th>
            <th className="px-4 py-3 text-left">Student Name</th>
            <th className="px-4 py-3 text-left">Grade</th>
            <th className="px-4 py-3 text-left">Performance</th>
          </tr>
        </thead>

        <tbody className='odd:bg-amber-100'>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">1</td>
            <td className="px-4 py-3">test</td>
            <td className="px-4 py-3">A+</td>
            <td className="px-4 py-3">Excellent</td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">2</td>
            <td className="px-4 py-3">test test</td>
            <td className="px-4 py-3">A</td>
            <td className="px-4 py-3">Very Good</td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">3</td>
            <td className="px-4 py-3">new</td>
            <td className="px-4 py-3">A</td>
            <td className="px-4 py-3">Very Good</td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-4 py-3">4</td>
            <td className="px-4 py-3">new test</td>
            <td className="px-4 py-3">B+</td>
            <td className="px-4 py-3">Good</td>
          </tr>

          <tr>
            <td className="px-4 py-3">5</td>
            <td className="px-4 py-3">abc</td>
            <td className="px-4 py-3">B+</td>
            <td className="px-4 py-3">Good</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopFive;