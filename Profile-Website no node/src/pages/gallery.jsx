import React from 'react'

function Gallery() {
  
  return (
    <section id='gallery'>
      <div className='flex flex-col w-full min-h-screen bg-[#F4F4F4] border-1'>
        
        {/*Title */}
        <div className='flex justify-center items-center text-4xl font-mono font-bold mt-16'>
          <p className='bg-blue-300 rounded-lg p-2 '>Gallery</p>
        </div>
        
        {/*Content */}
        <div className="flex flex-col justify-center items-center mt-10">
          {/*first*/}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center gap-5 ">
            <p className="bg-[url(./image/messi1.jpg)] bg-cover w-60 h-40 rounded-lg shadow-lg 
              transition-all duration-200 ease-in-out transform hover:scale-105"></p>
            <p className="bg-[url(./image/messi2.jpg)] bg-cover w-60 h-40 rounded-lg shadow-lg
              transition-all duration-200 ease-in-out transform hover:scale-105"></p>
            <p className="bg-[url(./image/messi3.jpg)] bg-cover w-60 h-40 rounded-lg shadow-lg
              transition-all duration-200 ease-in-out transform hover:scale-105"></p>
              
            <p className="bg-[url(./image/messi4.jpg)] bg-cover w-60 h-40 rounded-lg shadow-lg 
              transition-all duration-200 ease-in-out transform hover:scale-105"></p>
            <p className="bg-[url(./image/messi5.jpg)] bg-cover w-60 h-40 rounded-lg shadow-lg 
              transition-all duration-200 ease-in-out transform hover:scale-105"></p>
            <p className="bg-[url(./image/messi6.jpg)] bg-cover w-60 h-40 rounded-lg shadow-lg 
              transition-all duration-200 ease-in-out transform hover:scale-105"></p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Gallery
