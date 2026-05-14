import React from "react";
import { Reveal } from "./Reveal";

const Projects = () => {
  const projects = [
    {
      title: "Commercial Structure",
      cat: "Construction",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Residential Framing",
      cat: "Construction",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Site Inspection",
      cat: "Permits",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Foundation Work",
      cat: "Construction",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="examples" className="py-24 bg-gray-900 text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-800/20 pointer-events-none" />
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <Reveal>
              <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">
                Examples
              </h3>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-extrabold text-white">OUR EXAMPLES</h2>
            </Reveal>
          </div>
          <Reveal>
            <a
              href="#"
              className="hidden md:block text-white font-bold hover:text-orange-500 mt-4 md:mt-0 transition-colors border-b-2 border-orange-500 pb-1"
            >
              VIEW ALL EXAMPLES →
            </a>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className="group relative h-80 overflow-hidden cursor-pointer">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4 border-2 border-orange-500 m-4">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {proj.cat}
                  </span>
                  <h3 className="text-2xl font-bold">{proj.title}</h3>
                  <div className="w-12 h-1 bg-orange-500 mt-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-orange-500 font-bold hover:text-orange-400">
            VIEW ALL EXAMPLES →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;