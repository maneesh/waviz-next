import React from 'react';
import Navbar from '@/component/home/Navbar';
import Abouthero from '@/component/aboutus/Abouthero';
import Aboutmain from '@/component/aboutus/Aboutmain';
import Abouttitle from '@/component/aboutus/Abouttitle';
import Footer from '@/component/home/Footer';
export default function AboutPage() {
  return (
    <div>
      <Navbar />
     <Abouthero/>
     <Aboutmain/>
     <Abouttitle/>
     <Footer/>
    </div>
  );
}
