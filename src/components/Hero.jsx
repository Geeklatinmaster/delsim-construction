import React from "react";
import { Reveal } from "./Reveal";
import heroImg from "../assets/EstructuraAlmacen_Hero.JPG";

const Hero = () => {
  const containerClass = "max-w-[1600px] mx-auto px-6 md:px-12";

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Construction Site"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent" />
      </div>
      <div className={`relative z-10 ${containerClass} w-full`}>
        <div className="max-w-4xl">

          <Reveal>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              BUILDING THE <br /> FUTURE WITH{" "}
              <span className="text-orange-500">STRENGTH.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-300 mb-8 max-w-xl border-l-4 border-orange-500 pl-6">
              Specialists in commercial and residential construction. With years of international experience, we build your ideas into strong, lasting structures with precision, excellence, and the distinguished DELSIM mark of quality.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-wide transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/40">
                Our Services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 font-bold uppercase tracking-wide transition-all">
                View Examples
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;