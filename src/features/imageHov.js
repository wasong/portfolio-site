import { useState } from "react";

function HovImage({ src, alt, hoverSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <img
      src={isHovered ? hoverSrc : src}
      alt={alt}
      className="h-[50px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default HovImage;