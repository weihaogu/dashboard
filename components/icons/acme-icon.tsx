import React from 'react';
import {Svg} from '../styles/svg';
import Image from 'next/image';

export const AcmeIcon = () => {
   return (
      <div>
      <Image
        src="/logo.png" // The path to the image, relative to the `public` folder
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
      />
    </div>
   );
};
