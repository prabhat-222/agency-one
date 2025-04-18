import React from 'react'

export default function AboutGrid({icon, text, label, heading}) {
  return (
    <div className='flex justify-center items-center gap-3 flex-col bg-white rounded-lg m-2 p-3 lg:p-7'> 
        <img src={icon} alt="icon" width={65} height={65}  className='bg-green-400 p-3 rounded-full hover:bg-green-500 cursor-pointer'/>
        <h1 className='text-2xl text-center text-green-600 font-semibold'>{heading}</h1>
        <p className='text-[14px] text-center text-slate-700'>{text}</p>
        <p className='bg-green-800 text-white px-6 py-2 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer hover:rounded-full duration-400 transition ease-in'>{label}</p>
    </div>
  )
}
