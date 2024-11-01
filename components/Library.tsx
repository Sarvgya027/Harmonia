// 'use client'

// import React from 'react'
// import { BsPlusSquare } from 'react-icons/bs'
// import { TbPlaylist } from 'react-icons/tb'

// function Library() {
//   const onClick = () => {

//   }

//   return (
//     <div className='flex flex-col'>
//       <div className='flex items-center justify-between px-5 pt-4'>
//         <div className='inline-flex items-center gap-x-2'>
//           <TbPlaylist size={22} />
//             <p className='text-neutral-400 text-md'>Your Library</p>
//         </div>
//         <BsPlusSquare onClick={onClick} className='text-neutral-400 hover:text-white' />
//       </div>
//     </div>
//   )
// }

// export default Library

import { BsPlusSquare } from 'react-icons/bs';
import { TbPlaylist } from 'react-icons/tb';

const Library = () => {
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="inline-flex items-center gap-x-3">
          <TbPlaylist className="text-indigo-400" size={22} />
          <p className="text-slate-200 font-medium">Your Library</p>
        </div>
        <button 
          onClick={onClick}
          className="p-2 rounded-lg hover:bg-indigo-500/10 transition-colors duration-200"
        >
          <BsPlusSquare className="text-indigo-400 hover:text-indigo-300" size={20} />
        </button>
      </div>
      <div className='flex flex-col gap-y-4 mt-4 px-3 '>
        List of Songs

      </div>
    </div>
  );
};

export default Library;
