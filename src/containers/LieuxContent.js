import React from 'react'

const LieuxContent = ({ title }) => {
  return (
    <div className='page-content'>
      <div className='page-category-content'>
      <div className='page-category-content-title'><h1>{title}</h1></div>
        <p>Page Lieux</p>
      </div>
    </div>
  )
}

export default LieuxContent