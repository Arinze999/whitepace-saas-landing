import React from 'react';

type HamburgerIcon2Props = {
  color?: string;
  width?: number;
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerIcon2: React.FC<HamburgerIcon2Props> = ({
  color = 'white',
  width = 32,
  isOpen,
  onClick,
}) => {
  const scale = width / 60; // 60px is our base container width
  const containerWidth = width;
  const containerHeight = 45 * scale;
  const strokeThickness = 6; // thinner strokes
  const spanHeight = strokeThickness * scale;
  const spanWidth = containerWidth * 0.5;

  const getDefaultStyle = (index: number): React.CSSProperties => {
    let top = 0;
    if (index === 1 || index === 2) {
      top = 0;
    } else if (index === 3 || index === 4) {
      top = 18 * scale;
    } else if (index === 5 || index === 6) {
      top = 36 * scale;
    }
    const left = index % 2 === 1 ? 0 : spanWidth;
    return {
      position: 'absolute',
      display: 'block',
      height: `${spanHeight}px`,
      width: `${spanWidth}px`,
      top: `${top}px`,
      left: `${left}px`,
      background: color,
      borderRadius:
        index % 2 === 1
          ? `${strokeThickness * scale}px 0 0 ${strokeThickness * scale}px`
          : `0 ${strokeThickness * scale}px ${strokeThickness * scale}px 0`,
      transition: 'all 0.25s ease-in-out',
      transform: 'rotate(0deg)',
      opacity: 1,
    };
  };

  const getOpenStyle = (index: number): React.CSSProperties => {
    switch (index) {
      case 1:
        return {
          transform: 'rotate(45deg)',
          top: `${7 * scale}px`,
          left: `${5 * scale}px`,
        };
      case 2:
        return {
          transform: 'rotate(-45deg)',
          top: `${7 * scale}px`,
          left: `${spanWidth - 5 * scale}px`,
        };
      case 3:
        return {
          left: `-${spanWidth}px`,
          opacity: 0,
        };
      case 4:
        return {
          left: `${containerWidth}px`,
          opacity: 0,
        };
      case 5:
        return {
          transform: 'rotate(-45deg)',
          top: `${29 * scale}px`,
          left: `${5 * scale}px`,
        };
      case 6:
        return {
          transform: 'rotate(45deg)',
          top: `${29 * scale}px`,
          left: `${spanWidth - 5 * scale}px`,
        };
      default:
        return {};
    }
  };

  const spans = [1, 2, 3, 4, 5, 6].map((i) => {
    const defaultStyle = getDefaultStyle(i);
    const openStyle = isOpen ? getOpenStyle(i) : {};
    return <span key={i} style={{ ...defaultStyle, ...openStyle }} />;
  });

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer transition-all duration-500 nav-toggle"
      style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
    >
      {spans}
    </div>
  );
};

export default HamburgerIcon2;
