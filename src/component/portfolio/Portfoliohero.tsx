


import React from 'react'
import Image from 'next/image'
import pheroImg1 from '../../../public/images4/rounded_rectangle_1.png'
import pheroImg2 from '../../../public/images4/men_image.png'

export default function Portfoliohero() {
  return (
    <div className="relative w-full h-[750px] md:h-[830px] ">
  
      <Image
        src={pheroImg1}
        alt="Background"
        fill
        className="object-cover"
        priority
      />

    
      <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10">
  
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            IOT<br />PLATFORMS
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-medium text-justify md:text-left max-w-xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod ullam, laborum iusto a ut
            corporis laudantium necessitatibus molestiae maxime suscipit eius? Aspernatur officiis eius quod
            doloribus molestias ut architecto delectus accusantium reprehenderit commodi dignissimos corporis
            ullam, consequuntur doloremque asperiores.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-pink-500 px-8 py-2 rounded-full text-white hover:bg-pink-600 transition">
              More
            </button>
          </div>
        </div>

       
        <div className="w-2/3 md:w-1/3 mb-8 md:mb-0">
          <Image
            src={pheroImg2}
            alt="Banner"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

