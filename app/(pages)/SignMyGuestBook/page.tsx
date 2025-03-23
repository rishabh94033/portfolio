"use client";
import Navbar from "@/components/navbar";
import SpotifyPlaylistBanner from "@/components/spotify-playlist-banner";
import GuestBookSideComponent from "@/components/guestbookSideComponent";
import GuestbookMain from "@/components/guestbookMain";


export default function SignMyGuestBook() {
    return (
    <div className="bg-gray-950 lg:pl-0  pr-3 lg:pr-0 flex flex-col lg:flex-row"> {/*//main div*/}
    <div className="fixed -bottom-4  w-full h-20 lg:top-0 lg:left-0 lg:w-44 lg:h-screen z-50  ">
    <Navbar></Navbar>
          </div>
    <div className="lg:ml-44  pl-6 lg:pl-20 bg-gray-950">  {/*// middle main div*/} 
        <GuestbookMain/>
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