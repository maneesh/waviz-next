import React from 'react'
import Image from 'next/image'
import footerImg from "../../../public/images2/footer.jpg"

export default function Blockchainfooter() {
  return (
    <div className="w-full">
      <Image 
        src={footerImg} 
        alt="Footer image" 
        className="w-full h-auto object-cover" 
        priority
      />
    </div>
  )
}
