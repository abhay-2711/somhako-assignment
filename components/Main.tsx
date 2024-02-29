"use client";

import React from "react";
import Note from "./Note";
import { useNoteStore } from "@/store/NoteStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Main = () => {
  const router = useRouter();
  const notes = useNoteStore((state) => state.notes);

  const handleCreate = () => {
    router.push("/createnote");
  };

  return (
    <div className='flex flex-col'>
      <div className='flex mr-20 ml-20 w-auto mt-10 justify-between'>
        <div className='inline-block font-bold text-4xl'>My Notes</div>
        <button
          onClick={handleCreate}
          className='flex px-4 py-3 border rounded-lg gap-2 cursor-pointer bg-[#AF273E] text-white text-base'>
          <div>+</div>
          <div>Create new note</div>
        </button>
      </div>
      <div className='mt-10 h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-4 mx-10'>
          {notes.map((note) => (
            <Link
              href={{
                pathname: `/notedetails/${note.id}`
              }}
              key={note.id}>
              <Note note={note} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;