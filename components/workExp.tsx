import Image from "next/image"


export default function WorkExp(){

    return(
        <div>
             <section className="mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold lg:mb-12 mb-6">Work Experience</h2>
            
                      <div className="relative border-l-2 border-gray-700 lg:pl-18 pl-8 space-y-8">
                        {/* Experience Item 1 */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt="Company logo"
                              width={32}
                              height={32}
                              className="bg-gray-500"
                            />
                          </div>
                          <div className="text-gray-400 mb-1">June. 2024 - August 2024</div>
                          <h3 className="text-xl md:text-2xl font-bold">Full Stack Developer</h3>
                          <div className="text-lg text-blue-400 mb-3">Coding Blocks</div>
                          <p className="text-gray-300">
                          Here I built full-stack web applications using React, Next.js, Node.js, and PostgreSQL, ensuring responsiveness and high performance. By optimizing database queries with Prisma, I enhanced application scalability and efficiency. Additionally, I have worked on debugging, performance tuning, and deploying serverless solutions using Cloudflare Workers and Docker to create robust and scalable applications.
                          </p>
                        </div>
            
                        {/* \ */}
                        </div>
                     
                    </section>
            
        </div>
    )
}