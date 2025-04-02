import React from 'react'
import CustomNavbar from './CustomNavbar'
import Footer from './Footer'
import MiddleBar from './MiddleBar'
import BasicTable from './BasicTable'


const Dashboard = () => {
  return (
    <>
      <CustomNavbar />
      <MiddleBar />
      <hr />
      <h2 className='heading'>Card Holder Details</h2>
      <BasicTable />
      <div className='spacer'></div>
      <Footer />
    </>
  )
}

export default Dashboard