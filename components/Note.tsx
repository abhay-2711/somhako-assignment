"use client";

import { useNoteStore } from "@/store/NoteStore";
import React, { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface NoteProps {
  note: Note;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const notes = useNoteStore((state) => state.notes);

  useEffect(() => {
    console.log("note", note);
  }, [notes, note]);

  return (
    <div className='flex w-3/4 h-20 border border-[#EBEBEB] rounded-lg gap-2.5  m-10'>
      <div className='flex w-5/6 gap-6 cursor-pointer'>
        <div className={`w-1/2 rounded-tl-md rounded-bl-md z-10`} style={{ backgroundColor: note.colour }}></div>
            <div className='w-full mx-w-44 my-auto font-medium truncate'>
            {note.title}
            </div>
        </div>
      <div className='flex items-center cursor-pointer'>
        <BsThreeDotsVertical />
      </div>
  </div>
  );
};

export default Note;