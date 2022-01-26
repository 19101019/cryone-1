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
{/* bg-gray-200 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 */}

      <header className='card fixed top-0 left-0 right-0 z-20'>
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
        <div className='overflow-hidden'>
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
                <img className='w-8' src='./filter.png' alt="image" />
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


         {/* *****card first ********** */}
  

<div className="flex card">
  <div className="rounded-lg shadow-lg max-w-sm card">
    <a href="#!">
      <img className="rounded-t-lg" src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg" alt="ironman"/>
    </a>
    <div className="p-6">
      <h5 className="text-white-900 text-xl font-medium mb-2">Card title</h5>
      <p className="text-white-700 text-base mb-4">
      So, fans have had their eyes peeled for Tony's return to the MCU and they got their wish in Marvel Studio's first animated series on Disney+ What If…?. But it's been a bit of a Monkey's Paw as the show has killed Tony Stark four times in the first seven episodes of the show.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>

         </main>
         
   

    </>
  )
  
};

export default Header;
