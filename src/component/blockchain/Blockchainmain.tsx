
import React from 'react';
import Image from 'next/image';
import aboutIMg1 from '../../../public/images2/shape_1_copy.png';
import aboutIMg4 from '../../../public/images2/shape_1_copy_2.png';
import aboutIMg5 from '../../../public/images2/ellipse_1.png';

export default function Blockchainmain() {
  return (
    <section className="p-20 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-[700px] w-full relative  mb-25">

        {/* Overlapping Images */}
        <div className="   absolute -top-10 -right-10 ">
           <div className=" relative w-[130px] h-[130px] -mt-10 -ml-2">
            <Image
              src={aboutIMg1}
              alt=""
              fill
              priority
              className="object-contain z-40"
            />
          </div>
          <div className="relative w-[150px] h-[150px] -mt-30">
            <Image
              src={aboutIMg5}
              alt="circle"
              fill
              priority
              className="object-contain z-30"
            />
          </div>
         
          <div className="relative w-[110px] h-[110px] -mt-30 -ml-2">
            <Image
              src={aboutIMg4}
              alt=""
              fill
              priority
              className="object-contain z-60"
            />
          </div>
        </div>
        

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 text-start">Lorem Ipsum</h2>
          <p className="text-start text-purple-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
            Recusandae dignissimos eius numquam a dolorem magnam <br />
            aliquid hic! Consectetur rerum fuga illo provident placeat<br />
            atque recusandae quia eum neque odio. <br />
            aliquid hic! Consectetur rerum fuga illo provident placeat<br />
            atque recusandae quia eum neque odio.
          </p>
        </div>
      </div>


      <div className="bg-white shadow-lg rounded-xl p-8 max-w-[700px] w-full relative overflow-visible mb-25">

        {/* Overlapping Images */}
        <div className="absolute -top-10 ">
           <div className="relative w-[130px] h-[130px] -mt-10 -ml-2">
            <Image
              src={aboutIMg1}
              alt=""
              fill
              priority
              className="object-contain z-40"
            />
          </div>
          <div className="relative w-[150px] h-[150px] -mt-30">
            <Image
              src={aboutIMg5}
              alt="circle"
              fill
              priority
              className="object-contain z-30"
            />
          </div>
         
          <div className="relative w-[110px] h-[110px] -mt-30 -ml-2">
            <Image
              src={aboutIMg4}
              alt=""
              fill
              priority
              className="object-contain z-60"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 text-right">Lorem Ipsum</h2>
          <p className="text-right text-purple-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
            Recusandae dignissimos eius numquam a dolorem magnam <br />
            aliquid hic! Consectetur rerum fuga illo provident placeat<br />
            atque recusandae quia eum neque odio. <br />
            aliquid hic! Consectetur rerum fuga illo provident placeat<br />
            atque recusandae quia eum neque odio.
          </p>
        </div>
      </div>


      <div className="bg-white shadow-lg rounded-xl p-8 max-w-[700px] w-full relative overflow-visible mb-25">

        {/* Overlapping Images */}
        <div className="absolute -top-10 -right-10">
           <div className="relative w-[130px] h-[130px] -mt-10 -ml-2">
            <Image
              src={aboutIMg1}
              alt=""
              fill
              priority
              className="object-contain z-40"
            />
          </div>
          <div className="relative w-[150px] h-[150px] -mt-30">
            <Image
              src={aboutIMg5}
              alt="circle"
              fill
              priority
              className="object-contain z-30"
            />
          </div>
         
          <div className="relative w-[110px] h-[110px] -mt-30 -ml-2">
            <Image
              src={aboutIMg4}
              alt=""
              fill
              priority
              className="object-contain z-60"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 text-start">Lorem Ipsum</h2>
          <p className="text-start text-purple-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
            Recusandae dignissimos eius numquam a dolorem magnam <br />
            aliquid hic! Consectetur rerum fuga illo provident placeat<br />
            atque recusandae quia eum neque odio. <br />
            aliquid hic! Consectetur rerum fuga illo provident placeat<br />
            atque recusandae quia eum neque odio.
          </p>
        </div>
      </div>



      
    </section>
  );
}


