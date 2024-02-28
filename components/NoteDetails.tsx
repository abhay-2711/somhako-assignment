"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const NoteDetails = () => {

  const router = useRouter();
  
  const handleBack = () => {
    router.push('/');
  }

  return (
    <div className='flex flex-col bg-[#000000CC] min-h-screen'>
      <div className='flex mr-20 ml-20 w-auto mt-10 justify-between'>
        <h1 className='inline-block font-bold text-3xl md:text-4xl'>Note Details</h1>
        <button onClick={handleBack} className='flex px-4 py-3 border rounded-lg gap-2 cursor-pointer bg-[#AF273E] text-white text-base'>
          <div>&lt;</div>
          <div>Back</div>
        </button>
      </div>
      <div className='flex flex-col mx-auto border border-[#EBEBEB] rounded-lg w-3/4 md:w-1/3 h-58 p-10 mt-10 bg-[#ffffff]'>
        <div className='h-full'>
            <div className='h-18'>
                <div className='font-bold text-2xl'>
                    {/* {note.title} */}
                </div>
                <div>
                    Write something for your note
                </div>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default NoteDetails;