"use client";
import Navbar from "@/components/navbar";
import { signIn } from "next-auth/react";
import ComingSoon from "@/components/upcoming";


export default function SignMyGuestBook() {
    return (
    <div className="bg-gray-950">
    <div className="fixed -bottom-4  w-full h-20 lg:top-0 lg:left-0 lg:w-44 lg:h-screen z-50  ">
    <Navbar></Navbar>
          </div>
    <div>
        <ComingSoon></ComingSoon>
    </div>
    <div>
<button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
        </div>
    )}