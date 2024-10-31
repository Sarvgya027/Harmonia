// import React from 'react'
// import { twMerge } from 'tailwind-merge';

// interface BoxProps {
//   children: React.ReactNode;
//   className?: string
// }

// function Box({children, className}: BoxProps) {
//   return (
//     <div className={twMerge(`bg-neutral-900 rounded-lg h-fit`, className)}>
//       {children}
//     </div>
//   )
// }

// export default Box


import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => (
  <div className={twMerge(`bg-slate-900 rounded-xl h-fit border border-slate-800/40 backdrop-blur-sm`, className)}>
    {children}
  </div>
);

export default Box;