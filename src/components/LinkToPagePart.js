import React from 'react'
import down from '../img/down.svg'

const LinkToPagePart = ({ text, anchor, classStyle }) => {
  return (
    <div className={classStyle}>
      <a href={anchor}>
        <div>
          <span>{text}</span>
          <span>
            <object type='image/svg+xml' data={down} className='icon-down' style={{ zIndex: '-1' }}></object>
          </span>
        </div>
      </a>
    </div>
  )
}

export default LinkToPagePart