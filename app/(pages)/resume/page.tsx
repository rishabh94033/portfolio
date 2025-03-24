import Education from "@/components/education";
import GuestBookSideComponent from "@/components/guestbookSideComponent";
import Navbar from "@/components/navbar";
import ResumeIntro from "@/components/resumeIntro";
import Skills from "@/components/skills";
import SpotifyPlaylistBanner from "@/components/spotify-playlist-banner";
import WorkExp from "@/components/workExp";
import { Download } from "lucide-react";


export default function Resume() {
    return (
    <div className="bg-gray-950 lg:pl-0  pr-3 lg:pr-0 flex flex-col lg:flex-row"> {/*//main div*/}
    <div className="fixed -bottom-4  w-full h-20 lg:top-0 lg:left-0 lg:w-44 lg:h-screen z-50  ">
          <Navbar></Navbar>
          </div>
    <div className="lg:ml-44 lg:pl-20 pl-5 pr-3 mt-16"> {/*// middle main div*/}
    <div className="max-w-4xl mx-auto absolute lg:top-20 top-7 right-4 z-50">
        {/* Header with Download Button */}
        <div className=" mb-12">
            <a href="/Rishabh_resume.pdf"  target="_blank">
        <button className="flex items-center gap-2 lg:px-5 lg:py-3 py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
  <Download size={20} className="text-white" />
  <span className="text-white font-semibold">Download</span>
</button>
</a>
        </div>
        </div>
        <div className="mb-16">
            <ResumeIntro/>
        </div>
        <div className="mb-16 max-w-[480px]">
            <Education/>
        </div>
        <div className="lg:mb-16 mb-8 max-w-[480px]">
            <WorkExp/>
        </div>
        <div>
            <Skills/>
        </div>
    </div>
    <div className="lg:mt-64 lg:ml-80 lg:pr-16 pl-5 pr-3 pb-24">  {/*// right main div*/}
                <div>
                  <SpotifyPlaylistBanner />
                </div> 
                <div>
                <GuestBookSideComponent />
                  </div>
              </div>
        </div>
    
    )}