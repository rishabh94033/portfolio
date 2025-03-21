import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
export default function GitHub() {

const [blockSize, setBlockSize] = useState(17);
const [fontSize, setFontSize] = useState(17);

  useEffect(() => {
    const updateBlockSize = () => {
      if (window.innerWidth < 400) {
        setBlockSize(3);
        setFontSize(10);
        
      }
      if (window.innerWidth < 950) {
        setBlockSize(5);
        setFontSize(12);
        
      } else {
        setBlockSize(17);
        setFontSize(15);
      }
    };
    if (typeof window !== "undefined") {
      updateBlockSize(); // Set initial value
      window.addEventListener("resize", updateBlockSize);
    }

    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);
  return(
  <div className="flex justify-center w-full">
      <div className="w-full lg:mt-20 mt-5  hover:scale-105 hover:shadow-sm transition-all duration-300">
             <GitHubCalendar username="rishabh94033"
             year={2025}
             colorScheme="dark"
             fontSize={fontSize}
             blockSize={blockSize}
             blockMargin={4}
             />
      </div>
             </div>
  ) 
            }