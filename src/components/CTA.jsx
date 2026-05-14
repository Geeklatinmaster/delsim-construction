import React from "react";
import { Reveal } from "./Reveal";

const CTA = () => {
  const containerClass = "max-w-[1600px] mx-auto px-6 md:px-12";

  return (
    <section className="py-28 bg-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className={`${containerClass} text-center relative z-10`}>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-sm">
            READY TO START YOUR PROJECT?
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto font-medium">
            Contact us today for a free consultation and discover how we can bring your vision to
            life with DELSIM quality.
          </p>
        </Reveal>
        <Reveal>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 font-bold uppercase tracking-wide text-lg shadow-xl transition-transform hover:-translate-y-1 rounded-sm">
            Get a Free Quote
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;