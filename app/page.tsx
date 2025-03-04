
import Navbar from "@/components/navbar";
import GitHubCalendar from 'react-github-calendar';
import Socials from '@/components/socials'
import Intro from '@/components/intro'
import LatestProjects from "@/components/latestProj";


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
      <div>
        <Intro></Intro>
      </div>
      <div>
        <Socials/>
      </div>
      <div>
        <LatestProjects></LatestProjects>
      </div>
    </div>
    </div>
  );
}
