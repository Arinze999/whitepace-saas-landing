import React from 'react';
import Span from '../components/Span';
import Button from '../components/Button';
import Img from '../components/Img';

const Work = () => {
  return (
    <div className="pt-[3rem] lg:pt-[0] h-fit lg:pb-[10rem] pb-[5rem]">
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col lg:flex-row-reverse lg:justify-between lg:items-center xl:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-2 justify-center lg:items-start items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center lg:text-left flex gap-3">
              Work <Span text="together" className='bottom-[0.3rem]'/>
            </h1>
            <p className="text-center lg:text-left text-xl font-[400] leading-loose mb-[2rem] md:mb-[1rem]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <Button
              text="Try it now"
              className="bg-faintBlue text-myWhite h-[4rem] w-[12rem]"
              icon
            />
          </div>
          <div className="w-full flex justify-start items-start md:justify-center">
            <Img
              src="assets/imgs/worktogether.svg"
              className="mt-[4rem] xl:h-[28rem] lg:w-[30rem] 2xl:h-[34rem] lg:h-full md:h-[23rem] h-full bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
