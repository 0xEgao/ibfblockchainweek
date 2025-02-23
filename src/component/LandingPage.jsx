import React, { useState } from 'react';
import WorkshopAgenda from './WorkshopAgenda';
import ModernWorkshop from './ModernWorkshop';
import SponsorsSection from './SponsorsSection';
import BlockchainClub from './BlockchainClub';
import ImageGallery from './ImageGallery';
import Footer from './Footer';
import { Bitcoin } from 'lucide-react';
import BitcoinFlip from './BitcoinFlip';

const Button = ({ children, className, variant = 'default', onClick }) => {
  const baseStyles = "px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto";
  const variants = {
    default: "bg-indigo-600 hover:bg-indigo-700 text-white",
    outline: "border border-gray-700 text-gray-300 hover:bg-gray-800",
    ghost: "text-gray-300 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Height of navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 24; // Additional 24px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden scroll-pt-16">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
            <a onClick={() => handleNavigate('home')} className="text-gray-300 hover:text-white transition-colors cursor-pointer"><img src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75" alt=""  className='h-6 sm:h-8 w-12 sm:w-16' /></a>
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a onClick={() => handleNavigate('home')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</a>
              <a onClick={() => handleNavigate('timeline')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Timeline</a>
              <a onClick={() => handleNavigate('workshop')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Workshop</a>
              <a onClick={() => handleNavigate('events')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Events</a>
              <a onClick={() => handleNavigate('sponsors')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Sponsors</a>
              
              <a onClick={() => handleNavigate('aboutus')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="px-4 py-2" onClick={() => window.open('#', '_blank')}>Register</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a onClick={() => handleNavigate('home')} className="text-gray-300 hover:text-white cursor-pointer">Home</a>
                <a onClick={() => handleNavigate('timeline')} className="text-gray-300 hover:text-white cursor-pointer">Timeline</a>
                <a onClick={() => handleNavigate('workshop')} className="text-gray-300 hover:text-white cursor-pointer">Workshop</a>
                <a onClick={() => handleNavigate('sponsors')} className="text-gray-300 hover:text-white cursor-pointer">Sponsors</a>
                <Button onClick={() => window.open('#', '_blank')}>Register</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[30%] top-[20%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-[30%] top-[20%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center scroll-mt-24">
          <div className="space-y-8 py-16 sm:py-32">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white">
                BLOCKCHAIN WEEK{' '}
                <span className="block text-3xl sm:text-5xl md:text-7xl">2025</span>
                <span className="text-indigo-500 text-2xl sm:text-3xl md:text-5xl">Dive into Future withWeb3</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg md:text-3xl max-w-3xl mx-auto">
                APRIL 15TH - 20TH 2024
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button onClick={() => window.open('#', '_blank')} className="text-base sm:text-lg">Join Today</Button>
              <Button onClick={() => handleNavigate('workshop')} variant="outline" className="text-base sm:text-lg">Learn More</Button>
            </div>

            {/* Feature Badge */}
            <div className="pt-8 sm:pt-12">
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <span className="text-gray-300 text-sm sm:text-base">Beyond the chain payment</span>
              </span>
            </div>
          </div>
        </main>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] rounded-full border border-gray-800 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] rounded-full border border-gray-800 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[400px] h-[100px] sm:h-[400px] rounded-full border border-gray-800 opacity-40"></div>
      </div>

      {/* Feature Grid */}
      <div className="relative z-10 max-w-7xl font-co mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "Secure Transactions",
              description: "End-to-end encrypted blockchain transactions for maximum security"
            },
            {
              title: "Fast Processing",
              description: "Lightning-fast transaction processing with minimal fees"
            },
            {
              title: "Global Access",
              description: "Access your assets anywhere in the world, anytime"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-4 sm:p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-gray-800 hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sections with proper scroll margins */}
      <div id="timeline" className="scroll-mt-24"></div>
      <div id="timeline-content"><WorkshopAgenda /></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-32">
        <div id="workshop" className="scroll-mt-24"><ModernWorkshop /></div>
        <div id="events" className="scroll-mt-24"><ImageGallery /></div>
        <div id="sponsors" className="scroll-mt-24"><SponsorsSection /></div>
        <div id="aboutus" className="scroll-mt-24"><BlockchainClub /></div>
        
      </div>
      
      <div className="mt-[100px]"><Footer /></div>
    </div>
  );
};

export default LandingPage;