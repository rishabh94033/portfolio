
export default function SpotifyPlaylistBanner() {
    return (
<a 
            href="https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO" 
            target="_blank" 
            rel="noopener noreferrer"
        >
                    <div
            className="relative p-6 rounded-2xl shadow-xl border border-gray-800 text-white text-center overflow-hidden w-[350px] h-72"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/coffee_ing.jpg')" }}
            />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold tracking-wide text-gray-100 pt-4 pb-2">
                 Coffee Playlist ☕
                </h1>
                <p className="text-lg mt-3 text-gray-300">
                    A mix of songs I keep coming back to—some bring back memories, 
                    some just sound too good to skip. No matter the mood, 
                    there’s always something in here that feels right.
                </p>
            </div>
        </div>
</a>
    );
}
