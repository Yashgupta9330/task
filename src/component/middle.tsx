import React from 'react'
import '../app/globals.css'
import Card from './card'
import Card2 from './Card2'
const Middle = () => {
  return (
    <div className='w-full my-12 flex justify-center items-center'>
      <div className='w-full flex sm:flex-row flex-col justify-center items-center gap-10 sm:gap-12'>
      <Card/>
      <Card2/>
      </div>  
    </div>
  )
}

export default Middle
