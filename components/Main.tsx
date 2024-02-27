"use client"

import React from 'react'
import Note from './Note';
import { useNoteStore } from '@/store/NoteStore';

const Main = () => {

  const notes = useNoteStore((state) => state.notes);

  return (
    <div className='flex flex-col'>
      <div className='ml-20 w-auto mt-10'>
        <h1 className='inline-block font-bold text-4xl'>My Notes</h1>
      </div>
      <div className='border mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 place-items-center border'>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main