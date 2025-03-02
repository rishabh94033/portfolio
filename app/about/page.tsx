
import GridBackground from "@/components/animatedgrid"

export default function AboutMe() {
    return (
        <div>
        <div className="min-h-screen bg-#050505e7 text-white flex justify-center items-center relative">
  {/* Grid background (specific size and centered) */}
  <div className="absolute -z-20 h-full max-w-7xl left-1/2 -translate-x-1/2 overflow-hidden rounded-[300px]">
    <GridBackground />
  </div>

  {/* Content container (centered with max-width and rounded corners) */}
  <div className="relative max-w-6xl min-h-max bg-#3a3a20e7 text-white flex flex-col items-center justify-center pt-8 rounded-[300px] overflow-hidden">
    {/* Content */}
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* Heading with blue underline */}
      <div className="border-b-2 border-blue-400 pb-1 mb-4">
        <h1 className="text-5xl font-bold text-center">Rishabh</h1>
      </div>

      {/* Paragraph with max-width and centered text */}
      <div className="w-full flex justify-center items-center">
        <p className="text-2xl text-gray-300 mb-12 pt-4 text-center px-6 max-w-4xl font-normal font-sans">
          Passionate developer who thrives on building innovative and efficient solutions. A Linux enthusiast who enjoys customizing, breaking, and fixing things. Cybersecurity tinkerer with a keen eye for keeping systems locked down. Always exploring new tech, solving challenges, and turning ideas into reality—let’s build something awesome!
        </p>
      </div>
    </div>
  </div>
</div>
{/* Experience Timeline */}
<section className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-gray-600 pl-6 space-y-8">
            {/* Education */}
            <div>
              <span className="text-gray-400">2022-2026</span>
              <h3 className="text-xl font-semibold">BTech(CS) - Bml Munjal University</h3>
              <p className="text-gray-300">Bachelor of Technology (BTech) graduate with a specialization in Cybersecurity during the 3rd and 4th year.</p>
            </div>
            
            {/* Work Experience (Add more as needed) */}
            <div>
              <span className="text-gray-400">July(2024)-September(2024)</span>
              <h3 className="text-xl font-semibold">Summer Internship - Coding Blocks</h3>
              <p className="text-gray-300">Brief description of your role and impact.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  