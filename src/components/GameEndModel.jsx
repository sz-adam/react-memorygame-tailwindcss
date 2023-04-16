import React from 'react';

export default function GameEndModel({ handleStart,score,fault }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-10'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='bg-slate-400 text-center p-4 rounded-lg shadow-lg z-10 w-1/2 h-1/2  flex flex-col justify-center items-center '>
            <p className="font-bold tracking-widest text-5xl p-8 md:p-16 text-red-600 tex-center ">Game Over</p>
            <span className="font-bold tracking-widest text-2xl">Hit: {score}</span>
          <span className="p-1 font-bold tracking-widest text-2xl">Fault: {fault}</span>
                <button onClick={handleStart} className="bg-yellow-400 hover:bg-yellow-500 p-2 px-8 m-2 rounded-full font-bold tracking-widest text-base">New Game</button>
            </div>
        </div>
       
    )
}