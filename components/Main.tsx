"use client"

import React, { useEffect, useState } from 'react'
import Note from './Note';
import { useNoteStore } from '@/store/NoteStore';
import { useRouter } from 'next/navigation';

const Main = () => {

  const router = useRouter();
  const notes = useNoteStore((state) => state.notes);

  const [noteClicked, setNoteClicked] = useState<Note | null>(null);

  const handleCreate = () => {
    router.push('/createnote');
  }

  const handleNoteClick = (note: Note) => {
    setNoteClicked(note);
    router.push(`/notedetails/${note.id}?note=${JSON.stringify(note)}`);
  }

  useEffect(() => {
    console.log('notes', notes);
  }, [notes]);

  return (
    <div className='flex flex-col'>
      <div className='flex mr-20 ml-20 w-auto mt-10 justify-between'>
        <h1 className='inline-block font-bold text-4xl'>My Notes</h1>
        <button onClick={handleCreate} className='flex px-4 py-3 border rounded-lg gap-2 cursor-pointer bg-[#AF273E] text-white text-base'>
          <div>+</div>
          <div>Create new note</div>
        </button>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 place-items-center'>
          {notes.map((note) => (
            <Note key={note.id} note={note} onNote={handleNoteClick} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main