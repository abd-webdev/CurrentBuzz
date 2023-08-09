import React from 'react'
import loading from './loading.gif'

const spinner = () => {

    return (
      <div className='text-center'>
        <img src={loading} alt="loading" height="50px" width="50px"/>
      </div>
    )
  
}

export default spinner;