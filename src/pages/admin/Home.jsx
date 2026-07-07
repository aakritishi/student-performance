import React from 'react'
import TopSection from '../../components/dashboard/TopSection'
import TopFive from '../../components/dashboard/TopFive'
import PieChart from '../../components/dashboard/PieChart'

const Home = () => {
  return (
    <div className=''>
      <TopSection/>
      <TopFive/>
      <PieChart/>
    </div>
  )
}

export default Home