import React, { useEffect, useRef, useState } from 'react';

const navItems = [
  { title: 'Products', dropdown: ['Product1', 'Product2', 'Product3'] },
  { title: 'Solutions', dropdown: ['Solution1', 'Solution2', 'Solution3'] },
  { title: 'Resources', dropdown: ['Resource1', 'Resource2', 'Resource3'] },
  { title: 'Pricing', dropdown: ['Pricing1', 'Pricing2', 'Pricing3'] },
];

const Nav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="hidden web-nav">
      <ul className="flex gap-2 text-xl">
        {navItems.map((item, index) => (
          <li key={item.title} className="relative">
            {/* Header with title and chevron */}
            <div
              className="flex justify-between gap-4 items-center px-4 py-2 cursor-pointer"
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
            {/* Modal-like dropdown anchored beneath the nav item */}
            {openIndex === index && (
              <div className="absolute top-full left-0 mt-2 w-max min-w-[150px] bg-white text-black shadow-lg p-4 transition-all duration-300">
                <ul className="flex flex-col space-y-2">
                  {item.dropdown.map((dropItem) => (
                    <li key={dropItem} className="text-[14px]">
                      {dropItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
