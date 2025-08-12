import React from 'react'
import Image from 'next/image'
import aboutImg1 from '../../../public/images3/7030842.png'
import aboutImg2 from '../../../public/images3/layer_2.png'
export default function Aboutmain() {
  return (
    <section className="py-10">
      <div className="mb-8">
        <h1 className="text-4xl text-center font-black">FEATURED SERVICES</h1>
      </div>

    
<div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-12">
  <div className="flex-shrink-0">
    <Image 
      src={aboutImg2} 
      alt="About image" 
      className="w-auto h-auto max-w-xs md:max-w-sm object-contain" 
      priority 
    />
  </div>

  <div className="max-w-xl text-center md:text-left">
    <p className="text-base md:text-lg leading-relaxed text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere, culpa hic est unde quo. 
      Sit earum quos est odio ullam. Labore dolorem accusamus quas deleniti, nam doloremque? 
      Quasi ex beatae culpa, maiores odio vel blanditiis illo iure nisi. 
      Blanditiis tempore architecto laudantium unde ut quas ex, dolor iste.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere, culpa hic est unde quo. 
      Sit earum quos est odio ullam. Labore dolorem accusamus quas deleniti, nam doloremque? 
      Quasi ex beatae culpa, maiores odio vel blanditiis illo iure nisi. 
      Blanditiis tempore architecto laudantium unde ut quas ex, dolor iste.
    </p>
  </div>
</div>



      <div className='p-8'>
         <div className="mb-8">
        <h1 className="text-4xl text-center font-black"> CHALLENGES WITH <br></br> CLOUD & DEVOPS </h1>
      </div>
       <div className="flex flex-col  items-center justify-center gap-10 px-4">
        <div className="md:w-1/2 w-full">
          <Image 
            src={aboutImg1} 
            alt="About image" 
            className="w-full h-auto object-contain" 
            priority 
          />
        </div>
        
       <div className="max-w-5xl mx-auto px-4 md:px-8 py-6">
  <p className="text-lg md:text-base leading-relaxed text-gray-800 ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere, culpa hic est unde quo. Sit earum quos est odio ullam. Labore dolorem accusamus quas deleniti, nam doloremque? Quasi ex beatae culpa, maiores odio vel blanditiis illo iure nisi. Blanditiis tempore architecto laudantium unde ut quas ex, dolor iste rerum.t consectetur adipisicing elit. Labore facere, culpa hic est unde quo. Sit earum quos est odio ullam. Labore dolorem accusamus quas deleniti, nam doloremque? Quasi ex beatae culpa, maiores odio vel blanditiis illo iure nisi. Blanditiis tempore architecto laudantium unde ut quas ex, dolor iste tetur adipisicing elit. Labore facere, culpa hic est unde quo. Sit earum quos est odio ullam. Labore dolorem accusamus quas deleniti, nam doloremque? Quasi ex beatae culpa, maiores odio vel blanditiis illo iure nisi. Blanditiis tempore architecto laudantium unde ut quas ex, dolor iste 
  </p>
</div>

      </div>
      </div>
    </section>
  )
}
