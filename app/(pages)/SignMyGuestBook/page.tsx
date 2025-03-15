"use client";
import Navbar from "@/components/navbar";
import { signIn } from "next-auth/react";
import ComingSoon from "@/components/upcoming";


export default function SignMyGuestBook() {
    return (
    <div className="bg-gray-950">
    <div className="fixed top-0 left-0 flex-shrink-0 min-w-44 mr-20 ">
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