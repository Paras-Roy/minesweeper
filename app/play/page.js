import Game from '@/components/game/Game'
import React from 'react'

export default function Play() {
  return (
    <div className="p-2 flex-col gap-4 flex items-center max-w-[800px] w-11/12">
       <div className='flex w-full bg-white bg-opacity-5 font-medium text-xl backdrop-blur-sm rounded-lg py-2 px-4'>
            <div className=''>Difficulty</div>
            <div className='flex-1 text-center'>00:01</div>
            <div className=''>Restart</div>
       </div>
       <div className='flex w-full'>
            <Game/>
       </div>
    </div>
  )
}
