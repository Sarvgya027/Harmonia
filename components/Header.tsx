'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

function Header({children, className}: HeaderProps) {
  const router = useRouter();

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b `, className)}>
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden m:flex gap-x-2 items-center'>
          <button onClick={() => router.back} className='rounded-full bg-black flex items-center justify-center hover:opacity-70'>
            <RxCaretLeft size={28} className='text-white' />
          </button>
          <button onClick={() => router.forward} className='rounded-full bg-black flex items-center justify-center hover:opacity-70'>
            <RxCaretRight size={28} className='text-white' />
          </button>

        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button  className=''>
            <HiHome />
          </button>
          <button  className=''>
            <BiSearch />
          </button>

        </div>
        <div className='flex justify-between items-center gap-x-4'>
          <>
            <div>
              <Button onClick={() => {}} className='bg-transparent text-neutral-300'>Sign up</Button>
            </div>
            <div>
              <Button onClick={() => {}} className='bg-white text-neutral-300'>Login</Button>
            </div>
          </>

        </div>
      </div>
      {children}
      
    </div>
  )
}

export default Header;
