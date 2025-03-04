import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Socials() {
  return (
    <div>
      {/* Social Icons with Links */}
      <div className="text-4xl mt-24 flex gap-12">
        <a href="https://x.com/Rishabh94033" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="transition-transform duration-200 hover:scale-125 hover:text-blue-500 hover:rotate-12" />
        </a>

        <a href="https://github.com/rishabh94033" target="_blank" rel="noopener noreferrer">
          <FaGithub className="transition-transform duration-200 hover:scale-125 hover:rotate-12" />
        </a>

        <a href="https://www.linkedin.com/in/rishabh-sharma-263216253/" target="_blank" rel="noopener noreferrer">
          <SlSocialLinkedin className="transition-transform duration-200 hover:scale-125 hover:rotate-12 hover:text-blue-500" />
        </a>

        <a href="mailto:rishabh94033@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineMarkEmailUnread className="transition-transform duration-200 hover:rotate-12 hover:scale-125 hover:text-orange-500" />
        </a>
      </div>

      {/* Text with Twitter Icon */}
      
      
    <div className="mt-10 text-2xl text-blue-400 font-medium flex items-center">
        ...I create content too ( 
    <a href="https://x.com/Rishabh94033" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="ml-1 text-white hover:text-blue-500 transition-transform duration-200 hover:scale-110" />
        </a>)
      </div>
    </div>
  );
}
