
export default function SpotifyPlaylistBanner() {
    return (
<a 
            href="https://open.spotify.com/playlist/4kdDjRZXAOqZA4Jj0OZ9Gz?si=7T8UbER9RZSNN1wceSNAeg" 
            target="_blank" 
            rel="noopener noreferrer"
        >
                    <div
            className="relative p-3 rounded-2xl shadow-xl border border-gray-800 text-white text-center overflow-hidden lg:w-[350px] lg:h-[250px] lg:ml-12"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url('/coffee_ing.jpg')" }}
            />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-3xl font-extrabold tracking-wide text-gray-100 pt-4 pb-2">
                 Coffee <span className=" font-medium " >playlist</span> ☕
                </h1>
                <p className="text-md mt-3 text-gray-100">
                    A mix of songs I keep coming back to—some bring back memories, 
                    some just sound too good to skip. No matter the mood, 
                    there’s always something in here that feels right.
                </p>
            </div>
        </div>
</a>
    );
}
