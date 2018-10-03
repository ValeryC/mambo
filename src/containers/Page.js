import React from 'react'
import Footer from './Footer.js'

const Page = ({ Content, background }) => {
  return (
    <div className='page-container'>
      <div className='page-background'>
        <div className='page-image'
        style={{ backgroundImage: `url(${background}` }}></div>
      </div>
      <Content />
      <Footer />
    </div >
  )
}

export default Page
