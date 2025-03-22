import React from 'react';
import Guy from '../image/guy1.png';

function AboutMe() {
  
  return (
    <section id = "aboutme">
      <div className='flex w-full min-h-screen bg-blue-200'>
        {/* Container for both image and text */}
        <div className='flex flex-col lg:flex-row justify-center items-center w-full bg-blue-200 bg-center bg-cover bg-blend-multiply'>
          {/* Image Section with Overlay */}
          <div className='flex justify-center items-center lg:mr-10 lg:transform lg:translate-x-0'>
            <img src={Guy} className='w-80 h-60 sm:w-100 sm:h-80 md:w-100 md:h-80 lg:w-130 lg:h-110 mb-10 lg:mb-0' alt="Profile" />
          </div>

          {/* Text Content Section with Overlay */}
          <div className='flex flex-col justify-center items-center lg:items-start lg:ml-10 w-full lg:w-1/3 p-5 font-mono font-bold text-black'>
            <h1 className='text-4xl'>About Me</h1>
            <p className='text-xl py-1'>Part-time imposter</p>
            <p className='text-xs text-center lg:text-left max-w-2xl'>
              "I am a first-year uni student, and after 18 years (that's 6,721 days for the mathematically inclined) 
              of wandering this planet, I have come to a vital realization: I need an Asian boyfriend. Not just any boyfriend—a King. 
              Someone who can elevate my life from 'struggling student eating instant noodles' to 'living my best anime protagonist life.'"
            </p>
            <button 
              className='text-white mt-3 p-4 px-5 text-s font-mono font-bold rounded-full transition-all duration-200 ease-in-out transform bg-black hover:scale-105 hover:shadow-lg'
              onClick={() => alert("I don't have one lmao.")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;