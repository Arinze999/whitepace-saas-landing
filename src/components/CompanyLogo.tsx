import React from 'react';

const CompanyLogo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-[25px] md:w-[37px]">
        <img
          src="/assets/imgs/logoIcon.png"
          alt="company-logo"
          className="w-full h-auto object-cover"
        ></img>
      </div>
      <p className="font-bold text-[19px] md:text-[28px]">Whitepace</p>
    </div>
  );
};

export default CompanyLogo;
