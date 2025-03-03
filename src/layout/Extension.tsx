import React from 'react';
import Span from '../components/Span';
import Button from '../components/Button';
import Img from '../components/Img';

const Extension = () => {
  return (
    <div className="pt-[4rem] lg:pt-[6rem] h-fit lg:pb-[5rem] pb-[5rem] bg-myBlue text-myWhite z-[-2] relative">
      <img src="assets/svg/contourmobile.svg" alt="cont" className="absolute" />
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:items-start xl:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-5 lg:gap-1 justify-center lg:items-start items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center gap-3 lg:text-left flex flex-col md:flex-row">
              Use as
              <Span
                text="Extension"
                className="w-[80%] bottom-[0.4rem] 2xl:bottom-[0.4rem] 2xl:w-[100%] 2xl:right-[-2rem] right-[-2rem] xl:right-[4rem] xl:bottom-[-1rem] xl:w-[150%]"
              />
            </h1>
            <p className="text-center lg:text-left text-xl font-[400] leading-loose mb-[2rem] md:mb-[3rem] lg:mb-[0rem] xl:mb-[3rem]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <Button
              text="Let's Go"
              className="bg-faintBlue text-myWhite h-[4rem] w-[12rem]"
              icon
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Img
              src="assets/imgs/"
              className="mt-[4rem] lg:mt-[0] xl:h-[28rem] 2xl:h-[34rem] lg:h-[20rem] md:h-[23rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
