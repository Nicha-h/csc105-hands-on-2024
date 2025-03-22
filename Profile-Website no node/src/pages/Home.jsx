import React from 'react';
import InstaIcon from '../icons/Insta.png';
import Jiff from '../image/Scene1.gif';

function Home() { 
  return (
    <section id="home">
      <div className='snap-start snap-mandatory flex w-full min-h-screen min-w-[350px] bg-[#F4F4F4] border-1'>
        <div className='snap-start flex justify-center items-center mt-20 w-full 
          bg-blue-400 bg-center bg-[url(./image/Name-card.jpg)] bg-cover bg-blend-multiply 
          h-[350px] sm:h-[350px] md:h-[400px] lg:h-[500px] transition-all duration-200 ease-in-out transform'>

          {/* Content wrapper: Row layout */}
          <div className='flex flex-row justify-center items-center w-full px-4'>

            {/* Text content container */}
            <div className='flex flex-col justify-center items-start 
              font-mono font-bold text-white 
              w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3'>

              <p className='text-lg sm:text-lg md:text-2xl lg:text-3xl'>Hello, it's me</p>
              <p className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl py-1'>John Doe</p>
              <p className='text-base sm:text-lg md:text-2xl lg:text-3xl py-1'>I'm an imposter</p>
              <p className='text-[10px] sm:text-xs md:text-base lg:text-lg font-normal'>
                Please hold your breath as we dive into the water full of many errors and codes. 
                I can't complain much tho, this is kinda fun.
              </p>

              <div>
                <a href='https://www.instagram.com/wdym_001/'>
                  <img src={InstaIcon} alt="Instagram" className="mt-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 
                    rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg" />
                </a>
              </div>

              <button className='mt-4 p-1 sm:p-2 md:p-3 lg:p-3 px-3 sm:px-3 md:px-4 lg:px-5 
                text-xs sm:text-xs md:text-sm lg:text-base font-mono font-bold rounded-full 
                transition-all duration-200 ease-in-out transform bg-black hover:scale-105 hover:shadow-lg'
                onClick={() => alert("I dont have one lmao.")}>
                My Portfolio
              </button>
            </div>

            {/* Image container*/}
            <div className='flex justify-center items-center ml-5 sm:ml-10 md:ml-15 lg:ml-20'>
              <img src={Jiff} alt="Imagine a guy here" className='transition-all duration-200 ease-in-out transform
                w-50 h-40 sm:h-100 md:w-130 md:h-100 lg:w-170 lg:h-150 object-cover
                mb-3 sm:mb-11 md:mb-0 lg:mb-25' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
