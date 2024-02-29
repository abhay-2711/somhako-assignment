"use client";

import { useNoteStore } from "@/store/NoteStore";
import Image from "next/image";

import { useParams, useRouter } from "next/navigation";
import React from "react";

const NoteDetails = ({}) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const getNoteById = useNoteStore((state) =>
    state.getNoteById(parseInt(params.id))
  );

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className='flex flex-col bg-[#000000CC] min-h-screen'>
      <div className='flex mr-20 ml-20 w-auto mt-10 justify-between'>
        <h1 className='inline-block font-bold text-3xl md:text-4xl'>
          Note Details
        </h1>
        <button
          onClick={handleBack}
          className='flex px-4 py-3 border rounded-lg gap-2 cursor-pointer bg-[#AF273E] text-white text-base'>
          <div>&lt;</div>
          <div>Back</div>
        </button>
      </div>
      <div className='flex flex-col mx-auto border border-[#EBEBEB] rounded-lg w-3/4 md:w-1/3 p-10 bg-[#ffffff]'>
        <div className='h-full'>
          <div className='h-18'>
            <div className='font-bold text-2xl'>
              {getNoteById?.title ? getNoteById.title : "Sample Note"}
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='font-medium'>
            {getNoteById?.timestamp?.toString() || "29 Feb"}
          </div>
        </div>
        <div className='mt-5'>
          <Image
            src={
              getNoteById?.image ||
              "https://d3nn873nee648n.cloudfront.net/1200x1800-new/18648/SM848863.jpg"
            }
            alt=''
            width={600}
            height={60}
          />
        </div>
        <div className='mt-5'>
          {getNoteById?.content ? (
            <div className='font-medium'>{getNoteById.content}</div>
          ) : (
            <div className='font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis asperiores libero quis dolor, rem ipsa consequatur eos
              veniam minima placeat error. Perspiciatis facilis aut ex ullam
              aliquam fuga quas tempora exercitationem rerum iusto, tempore quod
              voluptatibus excepturi laudantium dolores architecto, aspernatur
              magnam vel animi voluptas amet? Quae eligendi sunt ipsum ab
              praesentium possimus dolore nulla fugiat amet, veniam, laudantium
              error harum nesciunt provident vero ex eveniet asperiores. Facilis
              illo, exercitationem assumenda placeat dolorum tempora porro
              aliquid quas? Voluptatem earum atque ipsa tempore? Aperiam commodi
              expedita distinctio cumque a tempore tenetur illo maiores
              veritatis unde consectetur, officiis ipsa quidem! Consequatur,
              aspernatur!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;