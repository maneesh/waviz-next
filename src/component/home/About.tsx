import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
     <section className="">
        
      <div className=" flex items-center justify-center pt-8 mb-16  h-auto">
        
       
          <div className="size-40 h-16 bg-purple-600 rounded-l-full mr-4"></div>
          <div className="bg-yellow-500 px-60 py-4 bl -skew-x-10 ">
            <h1 className="text-4xl font-bold text-purple-600 ">Train Hire And Deploy</h1>
          </div>
          <div className="size-40 h-16 bg-purple-600 rounded-r-full ml-4"></div>
        </div>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
          <h2 className="text-4xl text-black font-bold mt-2 ">Lorem Ipsum</h2>
        <p className="text-xl  mt-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dignissimos asperiores eveniet! Laboriosam, doloribus accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate eos dolor, ea commodi eligendi cum pariatur amet ullam provident?</p>

        <Image src="/images/layer_6.png" width={500} height={500} alt="" className="mt-5 relative left-10"/>
      </div>

     
    
        </section>
  )
}
