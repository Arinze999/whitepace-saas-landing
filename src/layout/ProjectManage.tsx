import React from 'react';
import Button from '../components/Button';
import Img from '../components/Img';
import Span from '../components/Span';

const ProjectManage = () => {
  return (
    <div className="pt-[4rem] lg:pt-[6rem] h-fit lg:pb-[0] pb-[5rem]">
      <img src="assets/svg/contourmobile.svg" alt="cont" className="absolute" />
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:items-start xl:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-5 justify-center lg:items-start items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center lg:text-left lg:flex lg:flex-col">
              Project <Span text="Management" />
            </h1>
            <p className="text-center lg:text-left text-xl font-[400] leading-loose mb-[2rem] md:mb-[3rem]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <Button
              text="Get Started"
              className="bg-faintBlue text-myWhite h-[4rem] w-[12rem]"
              icon
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Img src='assets/imgs/' className="mt-[4rem] xl:h-[28rem] 2xl:h-[34rem] lg:h-[20rem] md:h-[23rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManage;
