import React from 'react'

const Page = ({ Content, background }) => {
  return (
    <div className='page-container'>
      <div className='page-background'>
        <div className='page-image'
        style={{ backgroundImage: `url(${background}` }}></div>
      </div>
      <Content />
    </div >
  )
}

export default Page
