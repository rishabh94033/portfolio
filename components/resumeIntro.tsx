export default function ResumeIntro() {
    return (
      <div className="text-white">
        {/* Title */}
        <h1 className="text-6xl font-extrabold text-blue-200 lg:mb-16 mb-8">Resume</h1>
  
        {/* Description */}
        <p className="lg:text-xl text-lg max-w-2xl text-gray-300 leading-relaxed">
          I am a <span className="text-blue-400 font-semibold">Computer Science student</span> passionate about{" "}
          <span className="text-blue-400">AI, cybersecurity, and Web3</span>.
          I specialize in building secure, scalable applications and automation tools for modern <span className="text-blue-400">cloud-based systems.</span> With experience in optimizing performance and enhancing security, I enjoy working on innovative solutions that leverage AI and decentralized technologies. Always eager to learn and explore, I stay updated with the latest advancements in these fields.
        </p>
  
        {/* Call to Action */}
        <p className="mt-6 lg:text-xl text-lg font-semibold text-gray-200 bg-gray-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 lg:max-w-80 max-w-72">
          Open to new opportunities.
        </p>
      </div>
    );
  }
  