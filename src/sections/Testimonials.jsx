import React from 'react'
import { clients } from '../exports'
import ClientGrid from '../components/ClientGrid'

export default function Testimonials() {
  return (
    <section id='testimonials' className='w-full flex flex-col gap-5 h-fit p-7 lg:p-20'>
      <p className='text-center text-xl'>Testimonials</p>
      <h1 className='text-green-600 font-bold text-5xl text-center leading-[68px]'>What Cliant Says </h1>
      <p className='text-slate-950 text-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iste rerum ad  odit <br />aliquam consectetur laudantium adipisci deserunt eius magnam!</p>
      <div className='flex justify-center items-center flex-wrap mt-5 w-full gap-2'>
        {clients.map((client) => (
          <div key={client.name} className='w-72'>
            <ClientGrid {...client} />
          </div>
        ))}
      </div>
    </section>
  )
}
