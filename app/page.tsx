"use client";
import Navbar from "@/components/navbar";
import Socials from '@/components/socials'
import Intro from '@/components/intro'
import LatestProjects from "@/components/latestProj";
import SpotifyPlaylist from "@/components/playlistFixedIcon";
import BuyMeCoffee from "@/components/buyMeCoffee";
import ThankYouNote from "@/components/thank-you-note";
import GitHub from "@/components/github";
import SpotifyPlaylistBanner from "@/components/spotify-playlist-banner";


export default function Home() {
  
  return (
    
    <div className="bg-gray-950 flex flex-col lg:flex-row"> {/*//main div*/}
      <div className="fixed -bottom-4 w-full h-20 lg:top-0 lg:left-0 lg:w-44 lg:h-screen z-50 "> 
      <Navbar></Navbar>
      </div>
    <div className="lg:ml-44 lg:pl-20 pl-5 pr-3"> {/*// middle main div*/} 
      <div>
        <GitHub/>
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
      {/* <div>
        <SpotifyPlaylist></SpotifyPlaylist>
      </div> */}
      <div>
        <BuyMeCoffee></BuyMeCoffee>
      </div>
      <div className="flex justify-center lg:ml-80">
  {/* <ThankYouNote /> */}
</div>

    </div>
    <div className="lg:mt-96 lg:pr-7 lg:pl-0 pl-5 pr-3 pb-24"> {/*// right main div*/}
    <div>
  <SpotifyPlaylistBanner />
</div>  
      <div>
      </div>
    </div>
    </div>
  );
}
