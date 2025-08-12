import React from 'react'
import Image from 'next/image'
import heroaboutImg from "../../../public/images3/layer_3.png"
import heroaboutImg1 from "../../../public/images3/rounded_rectangle_1.png"
export default function Abouthero() {
  return (
     <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src={heroaboutImg1}
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-center space-y-6 ">
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold leading-tight">
        CLOUD & <br></br> DEVOPS
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg font-medium text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod ullam, laborum iusto a ut
            corporis laudantium necessitatibus molestiae maxime suscipit eius? Aspernatur officiis eius quod
            doloribus molestias ut architecto delectus accusantium reprehenderit commodi dignissimos corporis
            ullam, consequuntur doloremque asperiores.
          </p>
         
   <div className="flex justify-start md:justify-center">
    <button className="bg-pink-500 px-12 py-2 rounded-full text-white">
      More
    </button>
  </div>


        </div>

        {/* Image Section */}
        <div className="md:w-1/3 w-2/3">
          <Image
            src={heroaboutImg}
            alt="Banner"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}



