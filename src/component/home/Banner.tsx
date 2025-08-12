import React from 'react'
import bannerIMG from '../../../public/images/rounded_rectangle_3.png';
import Image from 'next/image';

export default function Banner() {
  return (
   
<div className="flex flex-wrap items-center justify-center pt-8 mb-16 min-h-40 gap-4 px-4 text-center">
  {/* Image Section */}
  <div className="w-full sm:w-auto flex justify-center">
    <Image src={bannerIMG} alt="Banner" width={100} height={50} />
  </div>

  {/* Left Rounded Shape */}
  <div className="hidden lg:block size-30 h-16 bg-purple-600 rounded-l-full mr-2"></div>

  {/* Banner Text Section */}
  <div className="bg-yellow-500 px-4 sm:px-8 md:px-12 lg:px-32 py-4 -skew-x-6 w-full sm:w-auto max-w-full">
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 skew-x-6">
      Full Stack JavaScript Training
    </h1>
  </div>

  {/* Right Rounded Shape */}
  <div className="hidden lg:block size-30 h-16 bg-purple-600 rounded-r-full ml-2"></div>
</div>



  )
}


