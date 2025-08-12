import React from 'react'
import Image from 'next/image'
import aboutIMG from '../../../public/images4/layer_3.png'
import aboutIMG1 from '../../../public/images4/layer_5.png' // Unused

export default function PortfolioAbout() {
  return (
    <section className="bg-gray-600 min-h-[600px] p-8">
      <h1 className="font-bold text-3xl md:text-5xl text-center text-white mb-10">
        LOREM IPSUM
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-white rounded-md p-4 w-[220px] shadow-lg">
          <h2 className="text-blue-700 font-bold text-xl mb-3 text-center leading-tight">
            COMPONENT <br /> SELECTION
          </h2>
          <div className="flex justify-center mb-3">
            <Image
              src={aboutIMG}
              alt="Component Selection Image"
              width={180}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-800 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            nostrum iusto, repellat eum obcaecati doloremque delectus facere
            distinctio fugit.
          </p>
        </div>

        <div className="bg-white rounded-md p-4 w-[220px] shadow-lg h-[352px]">
          <h2 className="text-blue-700 font-bold text-xl mb-3 text-center leading-tight">
            CLOUD<br /> PLATFORM
          </h2>
          <div className="flex justify-center mb-3">
            <Image
              src={aboutIMG1}
              alt="Component Selection Image"
              width={180}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-800 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            nostrum iusto, repellat eum obcaecati doloremque delectus facere
            distinctio fugit.
          </p>
        </div>

        <div className="bg-white rounded-md p-4 w-[220px] shadow-lg">
          <h2 className="text-blue-700 font-bold text-xl mb-3 text-center leading-tight">
            MOBILE <br /> APPLICATION
          </h2>
          <div className="flex justify-center mb-3">
            <Image
              src={aboutIMG}
              alt="Component Selection Image"
              width={180}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-800 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            nostrum iusto, repellat eum obcaecati doloremque delectus facere
            distinctio fugit.
          </p>
        </div>
      </div>
    </section>
  )
}
