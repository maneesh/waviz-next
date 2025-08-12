import React from 'react'
import Navbar from '@/component/home/Navbar'
import Portfoliohero from '@/component/portfolio/Portfoliohero'
import Portfoliotitle from '@/component/portfolio/Portfoliotitle'
import Portfolioabout from '@/component/portfolio/Portfolioabout'
import Portfoliomain from '@/component/portfolio/Portfoliomain'
import Footer from '@/component/home/Footer'
export default function page() {
  return (
    <div>
      <Navbar/>
      <Portfoliohero/>
      <Portfoliotitle/>
      <Portfolioabout/>
      <Portfoliomain/>
      <Footer/>
    </div>

  )
}
