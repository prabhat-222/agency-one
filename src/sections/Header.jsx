import React, { useEffect, useState } from 'react'
import { menu, close } from '../assets/icons'

export default function Header() {

  const [toggle, setToggle] = useState(false)
  const [iconToggle, setIconToggle] = useState(false)
  const [menuClass, setMenuClass] = useState('')

  const toggleMenu = () => {
    setToggle(!toggle);
  }
  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  }

  useEffect(() => {
    setMenuClass(toggle ? 'transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100' : 'transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0');
  }, [
    toggle])


  return (
    <section className='w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40'>
      <h1 className='text-green-600 text-3xl font-bold'>VeerTech</h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className='flex justify-center items-center gap-3'>
          <li><a className='text-lg text-slate-100 cursor-pointer px-5 py-2 hover:bg-green-600 hover:text-white hover:rounded-full duration-400 transition ease-in rounded-full active:text-white' href="/">Home</a></li>
          <li><a className='text-lg text-slate-100 cursor-pointer rounded-full px-5 py-2 hover:bg-green-600 hover:text-white active:text-white hover:rounded-full duration-400 transition ease-in' href="#services">Services</a></li>
          <li><a className='text-lg text-slate-100 cursor-pointer rounded-full px-5 py-2 hover:bg-green-600 hover:text-white active:text-white hover:rounded-full duration-400 transition ease-in' href="#testimonials">Testimonials</a></li>
          <li><a className='text-lg text-slate-100 cursor-pointer rounded-full px-5 py-2 hover:bg-green-600 hover:text-white active:text-white hover:rounded-full duration-400 transition ease-in' href="#pricing">Pricing</a></li>
          <li><a className='text-lg text-slate-100 cursor-pointer rounded-full px-5 py-2 hover:bg-green-600 hover:text-white active:text-white hover:rounded-full duration-400 transition ease-in' href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className='flex lg:hidden flex-col'>
        {iconToggle ? (
          <img src={close} alt="" width={30} height={30} onClick={() => { toggleMenu(), toggleIcon() }} />
        ) : (
          <img src={menu} alt="" width={30} height={30} onClick={() => { toggleMenu(), toggleIcon() }} />
        )}

        {toggle && (
          <div id='mob-menu' className={`bg-green-500 text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}>
            <ul className='flex flex-col justify-center items-center cursor-pointer gap-2'>
              <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Home</li>
              <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Services</li>
              <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Testimonials</li>
              <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Pricing</li>
              <li className='text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center'>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
