import Image from "next/image"

export default function Education() {
    return (
        <div>
        <section>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
        
                  <div className="relative border-l-2 border-gray-700 pl-8 md:pl-10 space-y-8">
                    {/* Education Item 1 */}
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="University logo"
                          width={32}
                          height={32}
                          className="bg-purple-600"
                        />
                      </div>
                      <div className="text-gray-400 mb-1">2016 - 2020</div>
                      <h3 className="text-xl md:text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                      <div className="text-lg text-blue-400 mb-3">University of Technology</div>
                      <p className="text-gray-300">
                        Graduated with honors. Specialized in web development and software engineering. Relevant coursework
                        included Data Structures, Algorithms, Database Systems, and Web Development.
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
                          className="bg-green-600"
                        />
                      </div>
                      <div className="text-gray-400 mb-1">2022</div>
                      <h3 className="text-xl md:text-2xl font-bold">Advanced Frontend Development Certification</h3>
                      <div className="text-lg text-blue-400 mb-3">Tech Academy</div>
                      <p className="text-gray-300">
                        Completed intensive training in modern frontend technologies including React, Next.js, TypeScript, and
                        state management libraries. Developed several projects as part of the certification program.
                      </p>
                    </div>
                  </div>
                </section>
        </div>
    )}