import React from 'react'

export default ({ placeHolder = '' }) => (
  <div className='search-input'>
    <input type='text' placeholder={placeHolder} />
  </div>
)
