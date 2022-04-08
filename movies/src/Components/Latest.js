import React from 'react'
import Navbar from './Navbar'
import Trending from './Trending'

function Latest() {
  return (
    <div className='bg-dark vh-100'>
        <Navbar />
          <h1 className='text-success text-xl-center mb-5 mt-5' style={{ fontFamily: 'Times New Roman, serif' }}>Latest Movies </h1>
        <Trending />
    </div>
  )
}

export default Latest