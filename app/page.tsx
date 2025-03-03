
import Navbar from "@/components/navbar";
import GitHubCalendar from 'react-github-calendar';


export default function Home() {
  return (
    
    <div className="bg-[#16223eb5] flex ">
      <div className="fixed top-0 left-0 flex-shrink-0 min-w-44 mr-20 ">
      <Navbar></Navbar>
      </div>
    <div className="ml-44 pl-20 ">
      <div className="w-full  mt-20  hover:scale-105 hover:shadow-sm transition-all duration-300">
             <GitHubCalendar username="rishabh94033"
             year={2025}
             colorScheme="dark"
             fontSize={15}
             blockSize={17}
             blockMargin={4}
              />
      </div>
      <div className="mt-16 text-2xl overflow-y-auto flex-grow ">
        Hi,I am <span className="text-blue-500 text-3xl font-medium">Rishabh</span>
      </div>
      <div className="text-6xl mt-8 font-black" >
  I craft{" "}
  <span className="font-semibold text-red-400 relative inline-block">
    {/* Text */}
    <span className="relative z-10">full-stack</span>

    {/* Rotated Background */}
    <span className="absolute inset-0 bg-red-200 transform rotate-[-3deg] -z-10"></span>
  </span> experiences that <br></br>users can't get <span className="text-green-400 font-semibold">enough of.</span>
      </div>
      <div className="mt-8 text-2xl font-medium text-gray-400">
       I have a deep love for Linux, cybersecurity, and coding.<br></br><br></br>Currently studying <span className="text-[#308dc9] font-bold">@BML Munjal University,</span><br></br> When I'm not diving into tech, you'll find me playing <span className="text-[#308dc9] font-bold">chess</span>, hitting the <span className="text-[#308dc9] font-bold">gym</span>, or going for a <span className="text-[#308dc9] font-bold">run.</span><br></br><br></br>Solving <span className="text-orange-400">LeetCode</span> out of <span className="font-bold">FOMO.</span>
      </div>
      <div>
        ncdkl
      </div>
    </div>
    </div>
  );
}
