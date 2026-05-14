import React from "react";
import { ShieldCheck, HardHat, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutUsImg from "../assets/images/AboutUs-Delsim-Construction-Logo.webp";

const AboutUs = () => {
  const containerClass = "max-w-[1600px] mx-auto px-6 md:px-12";

  return (
    <section className="py-24 bg-white" id="about">
      <div className={containerClass}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <Reveal>
              <img
                src={aboutUsImg}
                alt="Architect"
                className="rounded-sm shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 p-8 hidden md:block z-20 shadow-lg">
                <p className="text-4xl font-extrabold text-white">15+</p>
                <p className="font-bold uppercase tracking-wide text-sm text-white/90">
                  Years of Experience
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-cyan-400 -z-0" />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2">
                Why Choose DELSIM
              </h3>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                BUILT ON TRUST AND QUALITY
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-600 mb-8 text-lg">
                We don't just build structures, we build lasting relationships. Our commitment to
                excellence is unwavering, combining modern techniques with traditional values.
              </p>
            </Reveal>
            <div className="space-y-6">
              {[
                {
                  title: "Safety First",
                  sub: "Rigorous protocols on every site.",
                  icon: <ShieldCheck className="text-white" />,
                },
                {
                  title: "High Quality",
                  sub: "Premium materials and flawless finishes.",
                  icon: <HardHat className="text-white" />,
                },
                {
                  title: "On Time",
                  sub: "We strictly adhere to deadlines.",
                  icon: <Clock className="text-white" />,
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 200}>
                  <div className="flex items-start group">
                    <div className="bg-cyan-500 p-3 rounded-sm text-white mr-4 shadow-md group-hover:bg-orange-500 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;