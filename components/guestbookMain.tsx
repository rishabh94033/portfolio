import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";


export default function GuestbookMain() {
    const { data: session, status } = useSession()
  return (
    <div className="mt-20">
      {/* Welcome Text */}
      <div className="text-4xl font-semibold text-brown-700 mb-10">
        Welcome to the guestbook
      </div>

      {/* Sign-in Button */}
      {status === "authenticated"? (<div>
        <button
          onClick={() => signOut()}
          className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition flex items-center justify-center gap-2 mb-4"
        >
            Sign Out
            </button>
      </div>) : (
      <div>
        <button
          onClick={() => signIn("google")}
          className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition flex items-center justify-center gap-2 mb-4"
        >
        
          <span>Sign in with</span>
          <span className="font-bold text-2xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </span>
        </button>
      </div>)}
      {status === "authenticated" && session && session.user ? (
        <div className="text-xl">Signed in as <span className="text-blue-300 font-semibold">{session.user.name}</span></div>
      ) : (
        <div className="text-lg text-blue-300 font-semibold">Please Sign in to leave a comment</div>
      )}
     {status === "authenticated"? <Form /> : <div></div>}
      {/* Top Comments Section */}
      <div className="text-lg text-gray-300 font-medium mt-8">
        Here are the top comments
      </div>
    </div>
  );
}


export function Form() {
    const [message, setMessage] = useState("");


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        
        toast.success("Thank you for signing my guestbook!", {
          duration: 3000, // 5 seconds
          position: "bottom-center",
          style: {
            background: "#1E293B",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            padding: "12px 24px",
            borderRadius: "8px",
          },
          icon: "✨",
        });
    
        setMessage("");
      };
  
    return (
      <div className="p-6">
         <Toaster /> 

        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            placeholder="Write something kind..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80 mb-3"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 ml-5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all"
          >
            Send ❤️
          </button>
        </form>
      </div>
    );
  }
  