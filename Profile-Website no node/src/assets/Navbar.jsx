import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeButton, setActiveButton] = useState('Home');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    const sectionId = buttonName.toLowerCase().replace(/\s/g, '');
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.open('https://youtu.be/uHgt8giw1LY?si=RkgyuWc9Yx2kw_Fv', '_blank');
  };

  // Track scroll position and update active button
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutMeSection = document.getElementById('aboutme');
      const gallerySection = document.getElementById('gallery');

      const scrollPosition = window.scrollY + 100; // Add an offset to account for the navbar height

      if (scrollPosition < aboutMeSection.offsetTop) {
        setActiveButton('Home');
      } else if (scrollPosition < gallerySection.offsetTop) {
        setActiveButton('About Me');
      } else {
        setActiveButton('Gallery');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-20 w-full bg-[#F4F4F4] border-2 border-black-500 sm:h-10 lg:h-20'>
        {/* Name */}
        <div className='flex justify-start items-center font-bold font-mono text-blue-500 text-base sm:text-xl transition-all duration-200 ease-in-out transform mx-3 md:mx-5 lg:mx-10'>
          John
          <div className='p-1 text-black'>Doe</div>
        </div>

        {/* Buttons */}
        <div className='p-2 flex justify-center items-center gap-2 sm:gap-5 text-[10px] sm:text-xs md:text-base lg:text-s font-mono font-bold'>
          <button
            className={`p-2 sm:p-3 px-4 sm:px-5 rounded-full transition-all duration-200 ease-in-out transform ${activeButton === 'Home' ? 'bg-blue-500 text-white scale-105 shadow-lg' : 'bg-blue-200 hover:scale-105 hover:shadow-lg'}`}
            onClick={() => handleClick('Home')}
          >
            Home
          </button>

          <button
            className={`text-nowrap p-2 sm:p-3 px-4 sm:px-5 rounded-full transition-all duration-200 ease-in-out transform ${activeButton === 'About Me' ? 'bg-blue-500 text-white scale-105 shadow-lg' : 'bg-blue-200 hover:scale-105 hover:shadow-lg'}`}
            onClick={() => handleClick('About Me')}
          >
            About Me
          </button>

          <button
            className={`p-2 sm:p-3 px-4 sm:px-5 rounded-full transition-all duration-200 ease-in-out transform ${activeButton === 'Gallery' ? 'bg-blue-500 text-white scale-105 shadow-lg' : 'bg-blue-200 hover:scale-105 hover:shadow-lg'}`}
            onClick={() => handleClick('Gallery')}
          >
            Gallery
          </button>
        </div>

        {/* Contact button */}
        <button
          className='mr-10 p-2 sm:p-3 px-4 sm:px-5 text-[10px] sm:text-xs md:text-base lg:text-s font-mono font-bold rounded-full transition-all duration-200 ease-in-out transform bg-blue-300 hover:scale-105 hover:shadow-lg'
          onClick={handleContactClick}
        >
          Contact
        </button>
      </nav>
      <div className='pt-15'>
        
      </div>
    </div>
  );
}

export default Navbar;