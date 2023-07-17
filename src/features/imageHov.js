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
      className= "max-h-[50px]"
      src={isHovered ? hoverSrc : src}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default HovImage;