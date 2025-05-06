export default function GuestBookSideComponent() {
    return (
      <div
        className="relative p-6 border-2 border-gray-700 rounded-2xl shadow-lg bg-cover bg-center text-gray-700 mt-8 lg:w-[300px] lg:ml-12"
        style={{ backgroundImage: "url('/guestbook_img.jpg')" }} 
      >
        <div className="backdrop-blur-lg bg-black/10 p-4 rounded-2xl">
          <p className="text-md font-semibold">
            Thank you for visiting my website. Please leave a message in the guestbook.
          </p>
          <a href="/SignMyGuestBook">
          <p className="mt-3 text-blue-700 font-bold underline cursor-pointer">
            Go to guestbook
          </p>
          </a>
        </div>
      </div>
    );
  }
  