import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { TbLogs } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className=" flex pt-5 pb-5 bg-gray-900 max-w-28 items-center justify-center border-gray-600 border-r-2 outline-blue-950 flex-col">
     <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-500 mt-20 ">
        {/* <Image 
          src="/profile.jpg" // Change to your actual image path
          alt="Profile Picture"
          width={64} 
          height={64} 
          className="object-cover w-full h-full"
        /> */}
        
      </div>
      <ul className="justify-center gap-12 text-xl flex flex-col min-h-screen -mt-20">
        {/* Home */}
        <li className="group relative">
          <Link href="/">
            <TiHome className="text-2xl" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Home
          </span>
        </li>

        {/* Projects */}
        <li className="group relative">
          <Link href="/projects">
            <GoProjectRoadmap className="text-2xl" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Projects
          </span>
        </li>

        {/* About */}
        <li className="group relative">
          <Link href="/about">
            <IoInformationCircleOutline className="text-2xl" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            About
          </span>
        </li>

        {/* Contact */}
        <li className="group relative">
          <Link href="/contact">
            <RiContactsLine className="text-2xl" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Contact
          </span>
        </li>

        {/* Blogs */}
        <li className="group relative">
          <Link href="/blogs">
            <TbLogs className="text-2xl" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Blogs
          </span>
        </li>
      </ul>
    </nav>
  );
}
