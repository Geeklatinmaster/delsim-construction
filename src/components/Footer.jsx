import React from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const containerClass = "max-w-[1600px] mx-auto px-6 md:px-12";

  return (
    <footer id="contact" className="bg-gray-950 text-white pt-24 pb-12 border-t border-gray-800">
      <div className={`${containerClass} grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16`}>
        {/* Brand Column */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="border-2 border-orange-500 p-1 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-orange-500 font-bold text-xs">DS</span>
            </div>
            <h2 className="text-2xl font-bold">DELSIM</h2>
          </div>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Construction experts with a passion for details. At DELSIM, every brick tells a
            story of quality and commitment.
          </p>
          <p className="text-sm font-bold text-orange-500 mt-4">Certified General Contractor # CGC1533995</p>
          <div className="flex space-x-4">
            <div className="bg-gray-800 p-2 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer rounded-sm">
              <Facebook size={18} />
            </div>
            <div className="bg-gray-800 p-2 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer rounded-sm">
              <Instagram size={18} />
            </div>
            <div className="bg-gray-800 p-2 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer rounded-sm">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-3">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                <span className="text-cyan-500 mr-2">›</span> Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                <span className="text-cyan-500 mr-2">›</span> Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                <span className="text-cyan-500 mr-2">›</span> Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                <span className="text-cyan-500 mr-2">›</span> About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-3">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Construction Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Design & Planning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Interior Renovation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Green Architecture
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-3">Contact</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start">
              <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={16} />
              <span>11114 Satellite Blvd, Orlando, FL 32837</span>
            </li>
            <li className="flex items-center">
              <Phone className="text-orange-500 mr-3 flex-shrink-0" size={16} />
              <span>+1 (689) 259 - 1115</span>
            </li>
            <li className="flex items-center">
              <Mail className="text-orange-500 mr-3 flex-shrink-0" size={16} />
              <span>delsimconstructionllc@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${containerClass} pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs`}>
        <p>© 2024 Delsim Construction, LLC. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;