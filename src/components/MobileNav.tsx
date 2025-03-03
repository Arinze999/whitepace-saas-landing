import React, { useState } from 'react';
import Button from './Button';

type MobileNavProps = {
  isOpen: boolean;
};

const navItems = [
  { title: 'Products', dropdown: ['Product1', 'Product2', 'Product3'] },
  { title: 'Solutions', dropdown: ['Solution1', 'Solution2', 'Solution3'] },
  { title: 'Resources', dropdown: ['Resource1', 'Resource2', 'Resource3'] },
  { title: 'Pricing', dropdown: ['Pricing1', 'Pricing2', 'Pricing3'] },
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-myBlue text-white z-[-10] transition-transform duration-300 mobile-nav ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="flex flex-col w-full text-xl mt-[5rem]">
        {navItems.map((item, index) => (
          <li key={item.title}>
            {/* Header with title and chevron */}
            <div
              className="flex justify-between items-center px-4 py-2 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <span className="text-[16px]">{item.title}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* Dropdown items with smooth transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <ul className="flex flex-col px-8 py-2 space-y-2">
                {item.dropdown.map((dropItem) => (
                  <li key={dropItem} className="text-[12px]">
                    {dropItem}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 flex gap-2 md:hidden">
        <Button className="bg-dullYellow text-myBlue" text="Login" />
        <Button
          className="bg-faintBlue text-myWhite"
          text="Try Whitepace free"
          icon
        />
      </div>
    </div>
  );
};

export default MobileNav;
