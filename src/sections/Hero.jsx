import React from 'react'
import heroImg from '../assets/images/heroimg.png'

export default function Hero() {
    return (
        <section className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen'>
            <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20'>
                <h1 className='text-green-600 font-bold text-6xl'>One click solution for your static website</h1>
                <p className='text-slate-950 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas fugiat beatae at eveniet. Dolor itaque aut minima consequuntur commodi?</p>
                <div className='flex justify-center items-center gap-7'>
                    <button className='bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer hover:rounded-full duration-400 transition ease-in'>Viwe More</button>
                    <button className='border-2 border-green-800 text-green-800 text-[18px] rounded-md px-4 lg:px-8 py-3 hover:border-black hover:text-black cursor-pointer hover:rounded-full duration-100 transition ease-in'>watch Video</button>
                </div>
            </div>
            <div className='flex justify-center items-center w-1/2 px-5 py-20 object-cover'>
                <img src={heroImg} alt="heroImage" width={500} height={500} />
            </div>
        </section>
    )
}
