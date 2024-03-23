import React from 'react'
import '../app/globals.css'
import Card from './card'
import Card2 from './Card2'
const Middle = () => {
  return (
    <div className='w-full  my-[48px] flex justify-center items-center'>
      <div className='flex justify-center items-center gap-[40px]'>
      <Card/>
      <Card2/>
      </div>  
    </div>
  )
}

export default Middle