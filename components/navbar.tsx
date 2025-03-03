import Link from "next/link";
import { TbLogs } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiHome3Line } from "react-icons/ri";



export default function Navbar() {
  return (
    <nav className=" flex pt-5 pb-5 bg-[#0f1930a2] max-w-44 items-center justify-center border-gray-800 border-r-2 outline-blue-950 flex-col">
     <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700  ">
        {/* <Image 
          src="/profile.jpg" // Change to your actual image path
          alt="Profile Picture"
          width={64} 
          height={64} 
          className="object-cover w-full h-full"
        /> */}
        
      </div>
      <ul className="justify-center gap-12 flex flex-col min-h-screen -mt-8">
        {/* Home */}
        <li className="group relative">
          <Link href="/">
            <RiHome3Line className="text-3xl opacity-60" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Home
          </span>
        </li>

        {/* Projects */}
        <li className="group relative">
          <Link href="/projects">
          <HiOutlineComputerDesktop className="text-3xl opacity-60" />

          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Projects
          </span>
        </li>

        {/* About */}
        <li className="group relative">
          <Link href="/about">
            <IoInformationCircleOutline className="text-3xl opacity-60" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            About
          </span>
        </li>

        {/* Contact */}
        <li className="group relative">
          <Link href="/contact">
            <RiContactsLine className="text-3xl opacity-60" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Contact
          </span>
        </li>

        {/* Blogs */}
        <li className="group relative">
          <Link href="/blogs">
            <TbLogs className="text-3xl opacity-60" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Blogs
          </span>
        </li>
        <li className="group relative">
          <Link href="/resume">
            <GoProjectRoadmap className="text-3xl opacity-60" />
          </Link>
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}
