import React from 'react'

const GalerieContent = ({ title }) => {
  return (
    <div className='page-content'>
      <div className='page-category-content'>
      <div className='page-category-content-title'><h1>{title}</h1></div>
        <p>Page Galerie</p>
      </div>
    </div>
  )
}

export default GalerieContent