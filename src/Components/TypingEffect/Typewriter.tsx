import React, {useState, useEffect} from 'react';

interface TypewriterProps {
  text: string;
  speed: number;
}

export const useTypewriter = (text:string, speed = 50) => {
    
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);
  
    return displayText;
  };

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <h2>{displayText}</h2>;
};
