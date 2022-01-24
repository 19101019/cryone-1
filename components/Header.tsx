import React,{ useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "../public/logo.png";
import { HiMoon, HiOutlineShoppingCart, HiSun } from "react-icons/hi";
import Image from "next/image";
import SideNav from "./SideNav";
import Slider from "./Slider";
import Filter from '../public/filter.png'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <HiSun
          className="w-7 h-7 text-yellow-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <HiMoon
          className="w-7 h-7 text-gray-700"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <>
      <header className='bg-gray-200 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 fixed top-0 left-0 right-0 z-20'>
        <div className='mx-auto px-4 sm:px-6 py-4 flex justify-between items-center'>
          <Image
            width='50'
            height='50'
            src='/logo.png'
            alt='logo'
            className='select-none'
          />

          <div className='flex justify-around items-end'>
            <button className='bg-indigo-600 select-none text-white text-sm leading-6 font-medium shadow-lg shadow-indigo-500/30 px-2 py-1 rounded-lg hover:bg-indigo-800'>
              Connect Wallet
            </button>
            <div className='flex justify-evenly items-center cursor-pointer bg-indigo-600 p-1.5 px-2 rounded-lg mx-3 hover:bg-indigo-800'>
              <HiOutlineShoppingCart className='w-5 h-5 text-white realtive' />
              <p className='mx-3 text-white select-none text-sm font-medium'>
                Cart
              </p>
              <p className='select-none w-5 h-5 text-center flex justify-center items-center dark:text-indigo-600 bg-white text-sm px-2 rounded-md'>
                0
              </p>
            </div>

            {renderThemeChanger()}
          </div>
        </div>
      </header>
      <nav>
        <SideNav />
      </nav>
      <main className='border-lime-300  ml-32 absolute right-0 left-0 top-20 '>
        <div className=' overflow-hidden'>
          <Slider />
        </div>
        <section className='m-16 -mt-64'>
          <h1 className='text-3xl mb-4'>Category</h1>
          {/* <div className='bg-white rounded w-8'>
            <img className='w-8' src='./filter.png' />
          </div> */}
          <div className=' flex justify-center w-full'>
            <button className=' border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Filter  
            </button>
            <button className='  border-2 border-solid border-blue-500 p-12 '>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 1
            </button>
            <button className=' border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 2
            </button>
            <button className='border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 3
            </button>
            <button className='border-2 border-solid border-blue-500  p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 4
            </button>
            <button className='border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 5
            </button>
            <button className='border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 6
            </button>
          </div>
        </section>
        {/* <section className='cards'>
          <div className='card p-16'>Card1</div>
          <div className='card p-16'>Card2</div>
          <div className='card p-16'>Card3</div>
        </section> */}
      </main>
    </>
  );
};

export default Header;
