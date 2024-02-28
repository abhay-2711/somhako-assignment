"use client"

import { useNoteStore } from '@/store/NoteStore';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const colors = [
    "rgb(252 165 165)",
    "rgb(147 197 253)",
    "rgb(134 239 172)",
    "rgb(253 224 71)",
    "rgb(249 168 212)",
    "rgb(216 180 254)"
]
    
const CreateNote = () => {

    const router = useRouter();

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [colour, setColour] = useState<string>('rgb(252 165 165)');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const [notes, addNote] = useNoteStore((state) => 
        [state.notes, state.addNote]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleColourChange = (color: string) => {    
        setColour(color);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const note = {
            id: notes.length + 1,
            title,
            content,
            colour,
            image: imagePreview,
            timestamp: new Date(Date.now())
        }
        addNote(note);
        router.push('/');
        setTitle('');
        setContent('');
        setImagePreview(null);
        setColour('rgb(252 165 165)');
    }

  return (
    <div className='flex flex-col bg-[#000000CC] h-screen'>
      <div className='ml-20 mx-auto'>
        <h1 className='font-bold text-3xl md:text-4xl m-10'>Create New Note</h1>
      </div>
      <div className='flex flex-col mx-auto border border-[#EBEBEB] rounded-lg w-3/4 md:w-1/3 h-58 p-10 bg-[#ffffff]'>
        <div className='h-full'>
            <div className='h-18'>
                <div className='font-bold text-2xl'>
                    Create a Note
                </div>
                <div>
                    Write something for your note
                </div>
            </div>
            <div className='mt-5'>
                <label htmlFor='title' className='font-bold'>Title</label>
                <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='Enter a Title' className='w-full border h-10 border-[#DBDBDB] outline-none p-3 pl-2.5' />
            </div>
            <div className='mt-5 flex w-2/3'>
                <div className='w-full'>
                    <label htmlFor='image' className='font-bold w-full'>Choose Image</label>
                    <div className='flex border w-1/2'>
                        <label htmlFor='image' className='p-2 w-full cursor-pointer text-gray-400'>Choose Image
                        <input type='file' accept='image/*' onChange={handleImageChange} id='image' className='outline-none hidden' />
                        </label>
                    </div>
                </div>
                {imagePreview && (
                <div className='mt-3'>
                    <Image src={imagePreview} alt='image' width={50} height={50} />
                </div>
                )}
            </div>
            <div className='mt-5'>
                <label htmlFor='content' className='font-bold'>Content</label>
                <textarea id='content' name='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder='Enter Content' className='w-full border h-20 border-[#DBDBDB] outline-none p-3 pl-2.5' />
            </div>
            <div className='mt-5 flex flex-col'>
                <label htmlFor='colour' className='font-bold'>Choose Colour</label>
                <div className='flex mt-2 gap-3'> 
                    {colors.map((color, index) => (
                        <div key={index} style={{ backgroundColor: color }} className={`w-8 h-8 rounded-full cursor-pointer ${color===colour ? 'border-2 border-[#000]' : 'border-none'}`} onClick={() => handleColourChange(color)}>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-10'>
                <button className='bg-[#0055d1] text-white w-full h-11 rounded-md font-bold' onClick={(e) => handleSubmit(e)}>Create Note</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNote;