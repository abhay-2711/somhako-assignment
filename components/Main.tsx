import React from 'react'
import { notes } from '@/lib/details';
import Note from './Note';

const Main = () => {
  return (
    <div className='flex flex-col'>
      <div className='ml-20 w-auto'>
        <h1 className='inline-block font-bold text-4xl'>My Notes</h1>
      </div>
      <div className='border mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 place-items-center border'>
          {/* <h1 className='border flex w-3/4 m-10'>hello</h1>
          <h1 className='border flex w-3/4 m-10'>hello</h1>
          <h1 className='border flex w-3/4 m-10'>hello</h1>
          <h1 className='border flex w-3/4 m-10'>hello</h1> */}
          <Note />
        </div>
      </div>
    </div>
  )
}

export default Main