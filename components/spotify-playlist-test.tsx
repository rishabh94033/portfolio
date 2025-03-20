export default function SpotifyPlaylistTest() {
    return (
        <div
            className="relative p-6 rounded-2xl shadow-xl border border-gray-800 text-white text-center overflow-hidden w-96 h-72"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/listening-songs-lovely-day_973612-139.avif')" }}
            />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold tracking-wide text-gray-100">
                    Playlist I love
                </h1>
                <p className="text-lg mt-3 text-gray-300">
                    A mix of songs I keep coming back to—some bring back memories, 
                    some just sound too good to skip. No matter the mood, 
                    there’s always something in here that feels right.
                </p>
            </div>
        </div>
    );
}
