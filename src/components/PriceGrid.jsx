import React from 'react'

export default function PriceGrid({plan, price, label, about}) {
  return (
    <div className='flex flex-col justify-center items-start bg-white px-6 pt-10 pb-20 rounded-xl gap-8 border-[3px] border-green-800'>
        <h1 className='text-green-600 text-2xl'>{plan}</h1>
        <h1 className='text-green-600 text-4xl font-bold '>{price}</h1>
        <p className='bg-green-800 text-white px-6 py-2 rounded-md text-[20px] hover:bg-black hover:text-white cursor-pointer hover:rounded-full duration-400 transition ease-in'>{label}</p>
        <p className='text-slate-800 text-xl'>{about}</p>
    </div>
  )
}
