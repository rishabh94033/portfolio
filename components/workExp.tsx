import Image from "next/image"


export default function WorkExp(){

    return(
        <div>
             <section className="mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold lg:mb-12 mb-6">Work Experience</h2>
            
                      <div className="relative border-l-2 border-gray-700 pl-8 md:pl-10 space-y-8">
                        {/* Experience Item 1 */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt="Company logo"
                              width={32}
                              height={32}
                              className="bg-orange-500"
                            />
                          </div>
                          <div className="text-gray-400 mb-1">JAN. 2023 - PRESENT</div>
                          <h3 className="text-xl md:text-2xl font-bold">Senior Frontend Developer</h3>
                          <div className="text-lg text-blue-400 mb-3">TechCorp</div>
                          <p className="text-gray-300">
                            Led the development of responsive web applications using React and Next.js. Implemented state-of-the-art
                            UI components and optimized performance across multiple projects. Collaborated with design and backend
                            teams to deliver seamless user experiences.
                          </p>
                        </div>
            
                        {/* Experience Item 2 */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt="Company logo"
                              width={32}
                              height={32}
                              className="bg-orange-500"
                            />
                          </div>
                          <div className="text-gray-400 mb-1">MAR. 2021 - DEC. 2022</div>
                          <h3 className="text-xl md:text-2xl font-bold">Frontend Developer</h3>
                          <div className="text-lg text-blue-400 mb-3">WebSolutions Inc.</div>
                          <p className="text-gray-300">
                            Developed and maintained client websites using modern JavaScript frameworks. Implemented responsive
                            designs and ensured cross-browser compatibility. Worked closely with UX designers to translate mockups
                            into functional interfaces.
                          </p>
                        </div>
            
                        {/* Experience Item 3 */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt="Company logo"
                              width={32}
                              height={32}
                              className="bg-blue-500"
                            />
                          </div>
                          <div className="text-gray-400 mb-1">JUN. 2020 - FEB. 2021</div>
                          <h3 className="text-xl md:text-2xl font-bold">Junior Web Developer</h3>
                          <div className="text-lg text-blue-400 mb-3">Digital Creations</div>
                          <p className="text-gray-300">
                            Assisted in the development of web applications and e-commerce solutions. Gained experience with HTML,
                            CSS, JavaScript, and various frontend frameworks. Participated in code reviews and implemented feedback
                            from senior developers.
                          </p>
                        </div>
                      </div>
                    </section>
            
        </div>
    )
}