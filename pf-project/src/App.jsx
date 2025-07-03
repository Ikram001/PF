import React from "react";

function App() {
  const projects = [
    {
      name: "Project 1",
      link: "https://pizza-copy-pi.vercel.app/",
    },
    {
      name: "Project 2",
      link: "https://admin-dashboard-pi-ashen-77.vercel.app/",
    },
    {
      name: "Project 3",
      link: "#",
    },
  ];

  return (
    <div className="font-sans bg-black text-white">

      <section id="hero" className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold animate-pulse bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Ikramullah Nizamani
        </h1>
        <p className="mt-2 text-xs md:text-sm text-gray-400">
          Backend Developer | CS Student | Problem Solver
        </p>
      </section>

      
      <section id="about" className="py-8 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-300 leading-relaxed">
            I'm a frontend developer passionate about building clean, responsive UIs. I enjoy working with React and Tailwind CSS to bring ideas to life.
          </p>
        </div>
      </section>


      <section id="projects" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center m-10 mb-12 animate-pulse bg-gradient-to-r from-fuchsia-500 via-yellow-300 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-gradient-to-br from-purple-800 to-pink-700 p-0.5 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-black p-6 rounded-lg h-full w-full group-hover:animate-spin-slow border border-pink-500 group-hover:border-white transition-colors duration-300">
                <h3 className="text-lg font-semibold text-center group-hover:text-pink-400 transition">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs text-gray-400 text-center">
                  Click to view the live project.
                </p>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse -z-10" />
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white h-20"
          ></textarea>
          <button className="w-full bg-pink-600 hover:bg-pink-500 transition py-2 rounded-md font-semibold">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
