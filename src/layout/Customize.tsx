import React from 'react';
import Span from '../components/Span';
import Button from '../components/Button';
import Img from '../components/Img';

const Customize = () => {
  return (
    <div className="pt-[rem] lg:pt-[3em] h-fit lg:pb-[0] pb-[5rem]">
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row-reverse lg:justify-between lg:items-start xl:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-5 justify-center lg:items-end items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center lg:text-right lg:flex lg:flex-col">
              Customize it to
              <Span text="your needs" />
            </h1>
            <p className="text-center lg:text-right text-xl font-[400] leading-loose mb-[2rem] md:mb-[0rem]">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <Button
              text="Lets Go"
              className="bg-faintBlue text-myWhite h-[4rem] w-[12rem]"
              icon
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Img
              src="assets/imgs/"
              className="mb-[4rem] mt-0 xl:h-[28rem] 2xl:h-[34rem] lg:h-[20rem] md:h-[23rem] md:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
