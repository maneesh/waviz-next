import React from 'react'
import Image from 'next/image'
import titleImg from '../../../public/images4/side_vectore_image_2.png'
import titleImg2 from '../../../public/images4/layer_2.png'
import titleImg3 from '../../../public/images4/blanck_image.png'

export default function Portfoliotitle() {
  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 px-4 md:px-12 py-8">
        <Image
          src={titleImg}
          alt="Side Vector Graphic"
          width={64} // 16 * 4
          height={64}
          className="h-auto"
          priority
        />
        <h1 className="text-2xl md:text-5xl font-black text-center md:text-left">
          WHY CHOOSE US
        </h1>
      </div>

      {/* Background Section */}
      <div className="relative w-full min-h-[800px] h-[800px] bg-black">
        {/* Background Image */}
        <Image
          src={titleImg2}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Foreground Content */}
        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 gap-12 py-10">
          {/* First Box */}
          <div className="max-w-md w-full text-white space-y-6">
            <Image
              src={titleImg3}
              alt="Icon 1"
              width={80}
              height={80}
              className="mx-auto object-contain"
              priority
            />
            <p className="text-base sm:text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero
              repellendus distinctio, quasi corrupti voluptates maiores ea earum
              tempore iure dolor nisi, praesentium, temporibus cumque perspiciatis
              placeat ex at unde facere natus iusto ullam ab similique ipsam! Nihil,
              vero laudantium?
            </p>
            <div className="flex justify-center">
              <button
                className="px-8 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
                aria-label="More information about first box"
              >
                More
              </button>
            </div>
          </div>

          {/* Second Box */}
          <div className="max-w-md w-full text-white space-y-6">
            <Image
              src={titleImg3}
              alt="Icon 2"
              width={80}
              height={80}
              className="mx-auto object-contain"
              priority
            />
            <p className="text-base sm:text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero
              repellendus distinctio, quasi corrupti voluptates maiores ea earum
              tempore iure dolor nisi, praesentium, temporibus cumque perspiciatis
              placeat ex at unde facere natus iusto ullam ab similique ipsam! Nihil,
              vero laudantium?
            </p>
            <div className="flex justify-center">
              <button
                className="px-8 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
                aria-label="More information about second box"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
