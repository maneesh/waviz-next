


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import logoIMG from '../../../public/images/logo-header.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="h-16 sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-evenly items-center px-6 md:px-12 h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logoIMG} alt="Company Logo" width={140} height={60} />
        </div>

        {/* Desktop Nav Links */}
      <ul className="hidden md:flex  items-center">
  <li>
    <Link 
      href="/" 
      className="bg-[#772b90] text-white px-3 py-5   border-b-3 border-yellow-600 "
    >
      Home
    </Link>
  </li>
  <li>
    <Link 
      href="/blockchain" 
      className="hover:bg-[#772b90] hover:text-white px-3 py-5  transition hover:border-b-3 hover:border-yellow-600"
    >
      Blockchain
    </Link>
  </li>
  <li>
    <Link 
      href="/aboutus" 
      className="hover:bg-[#772b90] hover:text-white px-3 py-5  transition  hover:border-b-3 hover:border-yellow-600"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link 
      href="/portfolio" 
      className="hover:bg-[#772b90] hover:text-white px-3 py-5  transition hover:border-b-3 hover:border-yellow-600"
    >
      Portfolio
    </Link>
  </li>
  <li>
    <Link 
      href="/contact" 
      className="hover:bg-[#772b90] hover:text-white px-3 py-5  transition hover:border-b-3 hover:border-yellow-600"
    >
      Contact
    </Link>
  </li>
  <li>
    <button 
      type="button" 
      className="p-2 rounded-full hover:bg-yellow-600 hover:text-white"
    >
      <CiSearch size={24} />
    </button>
  </li>
</ul>



        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-4">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            
            <li><Link href="/blockchain" onClick={toggleMenu}>Blockchain</Link></li>
            <li><Link href="/aboutus" onClick={toggleMenu}>About Us</Link></li>
            <li><Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li>
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 transition">
                <CiSearch size={24} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

