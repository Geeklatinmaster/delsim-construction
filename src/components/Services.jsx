import React from "react";
import { HardHat, ClipboardCheck, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const Services = () => {
  const containerClass = "max-w-[1600px] mx-auto px-6 md:px-12";
  
  const services = [
    {
      title: "Construction",
      desc: "Comprehensive commercial and residential construction services. We bring your vision to life from blueprint to final build with unmatched quality.",
      icon: <HardHat size={40} className="text-orange-500" />,
      image: "https://images.unsplash.com/photo-1541888086925-ebbc3767f400?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Permits",
      desc: "Complete handling of building permits and compliance. We navigate local regulations and inspections so you can focus on your project.",
      icon: <ClipboardCheck size={40} className="text-orange-500" />,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className={containerClass}>
        <div className="text-center mb-16">
          <Reveal>
            <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2">
              What We Build
            </h3>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-extrabold text-gray-900">SERVICES</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4" />
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 200}>
              <div
                className="bg-white shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-b-4 border-transparent hover:border-orange-500 h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-orange-500/10 transition-all" />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-10 right-8 bg-white p-4 shadow-md rounded-sm border-t-4 border-cyan-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-orange-600 hover:text-orange-700"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;