// RawImg.tsx
import React from 'react';

type RawImgProps = {
  image: string;
  altText?: string;
  className?: string;
};

const RawImg = ({ image, altText, className }: RawImgProps) => {
  return <img src={image} alt={altText} className={className} />;
};

export default RawImg;
