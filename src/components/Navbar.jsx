import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Examples", href: "#examples" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const containerClass = "max-w-[1600px] mx-auto px-6 md:px-12";

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 hidden md:block">
        <div className={`${containerClass} flex justify-between items-center text-sm`}>
          <div className="flex space-x-6">
            <span className="flex items-center hover:text-orange-500 transition-colors cursor-pointer">
              <Phone size={14} className="mr-2 text-cyan-400" /> +1 (689) 259 - 1115
            </span>
            <span className="flex items-center hover:text-orange-500 transition-colors cursor-pointer">
              <Mail size={14} className="mr-2 text-cyan-400" /> delsimconstructionllc@gmail.com
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="text-gray-400">Mon - Fri: 8:00 - 18:00</span>
            <div className="flex space-x-3">
              <Facebook size={16} className="hover:text-orange-500 cursor-pointer" />
              <Instagram size={16} className="hover:text-orange-500 cursor-pointer" />
              <Linkedin size={16} className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 py-4"
        }`}
      >
        <div className={`${containerClass} flex justify-between items-center`}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-1/3 border-t border-orange-500 bg-orange-100/30 grid grid-cols-4 gap-px">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-orange-200/50 h-full w-full" />
                  ))}
                </div>
                <div className="font-bold text-lg leading-none z-10 flex">
                  <span className="text-gray-800">D</span>
                  <span className="text-cyan-500">S</span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter leading-none text-gray-900">
                DELSIM
              </h1>
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-900">
                CONSTRUCTION
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wide hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold uppercase text-sm tracking-wide transition-colors flex items-center shadow-lg shadow-orange-500/30">
              Request Quote <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 font-bold uppercase hover:text-orange-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-orange-500 text-white w-full py-3 font-bold uppercase">
                Request Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;