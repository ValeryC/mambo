import React from 'react'

const CalendrierContent = ({ title }) => {
  return (
    <div className='page-content'>
      <div className='page-category-content'>
      <div className='page-category-content-title'><h1>{title}</h1></div>
        <p>Page Calendrier</p>
      </div>
    </div>
  )
}

export default CalendrierContent