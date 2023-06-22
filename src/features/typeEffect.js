// import React, { useState, useEffect } from 'react';

// const TypingEffect = ({ text, delay }) => {
//   const [displayText, setDisplayText] = useState('');

//   useEffect(() => {
//     let currentIndex = 0;
//     let timeoutId;

//     const typeText = () => {
//       clearTimeout(timeoutId);
//       console.log(currentIndex)
//       if (currentIndex < text.length - 1) {
//         setDisplayText(prevText => prevText + text[currentIndex]);
//         currentIndex++;
//         timeoutId = setTimeout(typeText, 100);
//       }
//     };

//      const startTyping = () => {
//       timeoutId = setTimeout(typeText, delay);
//     };

//     startTyping();


//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [text, delay]);

//   return <span>{displayText}</span>;
// };

// export default TypingEffect;
