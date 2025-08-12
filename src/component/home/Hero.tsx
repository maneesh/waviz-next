

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-auto z-0">
      {/* Background Image */}
      <Image
        src="/images/rectangle_1.png"
        alt="React Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
     
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center h-full px-8 gap-10">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Text Block 1 */}
          <div className="relative left-20">
            <p className="text-xl text-white font-bold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Et cupiditate praesentium ea, esse quae atque!
            </p>
            <button className="text-xl bg-yellow-500 text-white rounded-lg px-6 py-2 mt-2">
              Lorem
            </button>
            <Image
              src="/images/arrow-right_copy_4.png"
              alt="Arrow"
              width={70}
              height={70}
              className="  relative  left-110 top-5 "  
            />
          </div>

          {/* Text Block 2 */}
          <div className="relative">
            <p className="text-xl text-white font-bold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Et cupiditate praesentium ea, esse quae atque!
            </p>
            <button className="text-xl bg-yellow-500 text-white rounded-lg px-6 py-2 mt-2">
              Lorem
            </button>
            <Image
              src="/images/arrow-right_copy_4.png"
              alt="Arrow"
              width={70}
              height={70}
              className="relative left-100 -top-15 "
            />
          </div>

          {/* Text Block 3 */}
          <div className="relative left-20 top-5">
            <p className="text-xl text-white font-bold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Et cupiditate praesentium ea, esse quae atque!
            </p>
            <button className="text-xl bg-yellow-500 text-white rounded-lg px-6 py-2 mt-2">
              Lorem
            </button>
            <Image
              src="/images/arrow-right_copy_3.png"
              alt="Arrow"
              width={70}
              height={70}
              className="absolute left-105 -top-5"
            />
          </div>
        </div>

        {/* Center Image Stack */}
        <div className="relative w-200 h-200 left-40 top-10">
          <Image src="/images/05.png" alt="Main Logo" layout="fill" objectFit="contain" />
          {/* <div className="relative z-10  h-40 w-40  bg-purple-500 flex justify-center items-center">
          <Image src="/images/layer_7.png" alt="Layer Logo" width={40} height={40} className=' w-40 h-40 rounded-full'/>
        </div> */}
        </div>

        {/* Icon Stack */}
        <div className="relative flex flex-wrap justify-center items-center gap-4 w-64">
          <Image src="/images/anguler.png" alt="Angular" width={40} height={40} className="absolute  h-15 w-15 -top-28 -left-48" />
          <Image src="/images/reactjs.png" alt="React" width={40} height={40} className=' absolute -top-33 -left-12  h-15 w-15' />
          <Image src="/images/vuejs.png" alt="Vue" width={40} height={40} className='h-15 w-15 absolute -left-65 top-7 ' />
          <Image src="/images/storybook.png" alt="Storybook" width={40} height={40} className='h-15 w-15 absolute top-3 ' />
          <Image src="/images/nodejs.png" alt="Node.js" width={40} height={40} className='h-15 w-15 absolute top-35 -left-50' />
          <Image src="/images/sass_less.png" alt="Sass & Less" width={40} height={40} className='h-15 w-15 absolute top-35 -left-10 ' />
        </div>

        {/* Circle Logo */}
        
      

        {/* Right Column */}
        <div className="space-y-10 text-right">
          {/* Text Block 1 */}
          <div className="relative">
            <p className="text-xl text-white font-bold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Et cupiditate praesentium ea, esse quae atque!
            </p>
            <button className="text-xl bg-yellow-500 text-white rounded-lg px-6 py-2 mt-2">
              Lorem
            </button>
            <Image
              src="/images/arrow-right.png"
              alt="Arrow"
              width={70}
              height={70}
              className="relative -left-41 top-15"
            />
          </div>

          {/* Text Block 2 */}
          <div className="relative">
            <p className="text-xl text-white font-bold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Et cupiditate praesentium ea, esse quae atque!
            </p>
            <button className="text-xl bg-yellow-500 text-white rounded-lg px-6 py-2 mt-2">
              Lorem
            </button>
            <Image
              src="/images/arrow-right.png"
              alt="Arrow"
              width={70}
              height={70}
              className="relative -left-13 -top-10 "
            />
          </div>

          {/* Text Block 3 */}
          <div className="relative top-20 -left-20">
            <p className="text-xl text-white font-bold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Et cupiditate praesentium ea, esse quae atque!
            </p>
            <button className="text-xl bg-yellow-500 text-white rounded-lg px-6 py-2 mt-2">
              Lorem
            </button>
            <Image
              src="/images/arrow-right_copy_2.png"
              alt="Arrow"
              width={70}
              height={70}
              className="relative -top-61 -left-20  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

