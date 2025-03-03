import React from 'react';

const Button = ({
  className,
  text,
  icon,
}: {
  className?: string;
  text?: string;
  icon?: boolean;
}) => {
  return (
    <button
      className={`${className} border-none rounded-xl py-[10px] px-[20px] flex justify-center items-center gap-2`}
    >
      {text}
      {icon && (
        <div>
          <img src="/assets/svg/arrowright.svg" alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
