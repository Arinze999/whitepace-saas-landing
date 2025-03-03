import React from 'react';

const Img = ({ className, src }: { className?: string; src: string }) => {
  return (
    <div
      className={`${className} bg-[#C4DEFD] w-full md:w-[36rem] xl:w-[43rem] 2xl:w-[51rem] h-[12rem] mt-[7rem] md:mt-[5rem] flex`}
    >
      <img
        src={src}
        alt="img"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Img;
