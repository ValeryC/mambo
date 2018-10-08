import React from 'react'
import Footer from './Footer.js'

const Page = ({ Content, background, categoryName }) => {
  return (
    <div className='page-container'>
      <div className='page-background'>
        <div className='page-image'
        style={{backgroundImage: `url(${background}`}}></div>
      </div>
      <Content title={categoryName} />
      <Footer />
    </div >
  )
}

export default Page
