import Link from "next/link";
import { TbLogs } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiHome3Line } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex lg:pt-5 lg:pb-5 lg:max-w-44 items-center justify-center lg:border-gray-800 lg:border-r-2 outline-blue-950 flex-row lg:flex-col lg:bg-gray-950 z-50 bg-blue-850 
      lg:bg-none bg-gradient-to-r from-gray-900 to-gray-950 lg:min-h-screen min-h-[70vh]">
      
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 hidden lg:block">
        {/* <Image 
          src="/profile.jpg" // Change to your actual image path
          alt="Profile Picture"
          width={64} 
          height={64} 
          className="object-cover w-full h-full"
        /> */}
      </div>

      <ul className="justify-center lg:gap-12 gap-7 flex flex-row lg:flex-col lg:min-h-screen min-h-[70vh] lg:-mt-8 pt-3">
        {/* Home */}
        <li className="group relative">
          <Link href="/">
            <RiHome3Line className="text-3xl opacity-60 hover:text-blue-400" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Home
          </span>
        </li>

        {/* Projects */}
        <li className="group relative">
          <Link href="/projects">
            <HiOutlineComputerDesktop className="text-3xl opacity-60  hover:text-blue-400" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Projects
          </span>
        </li>

        {/* About
        <li className="group relative">
          <Link href="/about">
            <IoInformationCircleOutline className="text-3xl opacity-60 hover:text-blue-400" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            About
          </span>
        </li> */}

        {/* Contact */}
        <li className="group relative">
          <Link href="/SignMyGuestBook">
            <IoMdBook className="text-3xl opacity-60 hover:text-blue-400" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            SignMyGuestBook
          </span>
        </li>

        {/* Blogs */}
        <li className="group relative">
          <Link href="/blogs">
            <TbLogs className="text-3xl opacity-60 hover:text-blue-400" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Blogs
          </span>
        </li>
        
        {/* Resume */}
        <li className="group relative">
          <Link href="/resume">
            <GoProjectRoadmap className="text-3xl opacity-60 hover:text-blue-400" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}
