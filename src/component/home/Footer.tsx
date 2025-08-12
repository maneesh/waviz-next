import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <Image
        src="/images/footer.png"
        alt="Footer image"
        className="w-full h-auto"
        width={1920} // adjust as needed
        height={200}  // adjust as needed
      />
    </div>
  );
}
