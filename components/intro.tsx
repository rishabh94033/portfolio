export default function Intro() {
  return (
      <div className="lg:w-[850px]">
          <div className="lg:mt-16 mt-6 lg:text-2xl text-md overflow-y-auto flex-grow">
              Hi, I am <span className="text-blue-500 lg:text-2xl text-xl font-medium">Rishabh</span>
          </div>

          <div className="lg:text-4xl text-2xl lg:mt-8 mt-3 font-black">
              I craft{" "}
              <span className="font-semibold text-red-400 relative inline-block">
                  {/* Text */}
                  <span className="relative z-10">full-stack</span>
                  <span className="absolute inset-0 bg-red-200 transform rotate-[-3deg] -z-8 rounded-md"></span>
              </span>{" "}
              experiences that <br />
              users can&apos;t get <span className="text-green-400 font-semibold">enough of.</span>
          </div>

          <div className="mt-8 lg:text-xl text-lg pr-[1px]  font-medium text-gray-400">
              I have a deep love for Linux, cybersecurity, and coding.
              <br />
              <br />
              Currently studying <span className="text-[#308dc9] font-bold">@BML Munjal University</span>,
              <br /> When I&apos;m not diving into tech, you&apos;ll find me playing{" "}
              <span className="text-[#308dc9] font-bold">chess</span>, hitting the{" "}
              <span className="text-[#308dc9] font-bold">gym</span>, or going for a{" "}
              <span className="text-[#308dc9] font-bold">run</span>.
              <br />
              <br />
              Solving <span className="text-orange-400">LeetCode</span> out of <span className="font-bold">FOMO.</span>
          </div>
      </div>
  );
}
