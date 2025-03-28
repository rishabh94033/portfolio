import Image from "next/image"

export default function Education() {
    return (
        <div>
        <section>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
        
                  <div className="relative border-l-2 border-gray-700 lg:pl-18 pl-8 space-y-8">
                    {/* Education Item 1 */}
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="University logo"
                          width={32}
                          height={32}
                          className="bg-gray-500"
                        />
                      </div>
                      <div>
  <div className="text-gray-400 mb-1">2020 - 2022</div>
  <h3 className="text-xl md:text-2xl font-bold">Higher Secondary Education</h3>
  <div className="text-lg text-blue-400 mb-3">Lord Jesus Public School</div>
  <p className="text-gray-300">
    Completed 10th and 12th grade with a focus on Science and Mathematics. Developed a strong foundation in Computer Science, 
    Physics, and Mathematics, which laid the groundwork for my passion in technology and problem-solving.
  </p>
</div>
        
                    {/* Education Item 2 */}
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="Institution logo"
                          width={32}
                          height={32}
                          className="bg-gray-500"
                        />
                      </div>
                      <div className="text-gray-400 mb-1 mt-4">2022 - 2024</div>
  <h3 className="text-xl md:text-2xl font-bold">Bachelor of Technol6gy in Computer Science</h3>
  <div className="text-lg text-blue-400 mb-3">BML Munjal University</div>
  <p className="text-gray-300">
    Specialized in Cybersecurity with a strong foundation in AI, Web Development, and Cloud Computing.  
    Relevant coursework included Network Security, Cryptography, Data Structures, Algorithms, and System Design.
  </p>
                    </div>
                  </div>
                  </div>
                </section>
        </div>
    )}