import React, { useState } from 'react';

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      url: "src/assets/g1.jpg",
      title: "Web3 Summit 2025",
      date: "March 15, 2025",
      description: "Exploring the future of decentralized technologies",
      attendees: "500+ Web3 Enthusiasts"
    },
    {
      id: 2,
      url: "src/assets/g5.JPG",
      title: "DeFi Conference",
      date: "February 28, 2025",
      description: "Latest innovations in decentralized finance",
      attendees: "300+ DeFi Experts"
    },
    {
      id: 3,
      url: "src/assets/g7.JPG",
      title: "Blockchain Developer Meetup",
      date: "February 10, 2025",
      description: "Technical deep-dive into blockchain development",
      attendees: "200+ Developers"
    },
    {
      id: 4,
      url: "src/assets/g2.jpg",
      title: "NFT Exhibition",
      date: "January 25, 2025",
      description: "Showcasing digital art on the blockchain",
      attendees: "400+ Artists & Collectors"
    },
    {
      id: 5,
      url: "src/assets/3.JPG",
      title: "Crypto Trading Workshop",
      date: "January 15, 2025",
      description: "Advanced trading strategies in crypto markets",
      attendees: "250+ Traders"
    },
    {
      id: 6,
      url: "src/assets/g8.jpeg",
      title: "Metaverse Expo",
      date: "January 5, 2025",
      description: "Virtual reality meets blockchain technology",
      attendees: "600+ Participants"
    }
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="min-h-screen bg-[#050505] bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#050505] p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Past <span className="text-[#6366F1]">Events</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our journey through the blockchain revolution. Each event represents a milestone in shaping the future of Web3.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-[#0a0a1a] border border-gray-800 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#6366F1]/30"
              onClick={() => {
                setSelectedImage(event);
                setCurrentIndex(index);
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.url}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[#6366F1] text-sm font-semibold mb-2">{event.date}</div>
                  <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{event.description}</p>
                  <div className="mt-4 inline-block px-4 py-2 bg-[#6366F1]/10 backdrop-blur-sm rounded-full text-[#6366F1] text-sm border border-[#6366F1]/20">
                    {event.attendees}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6366F1]/10 hover:bg-[#6366F1]/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 border border-[#6366F1]/20"
              onClick={handlePrev}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6366F1]/10 hover:bg-[#6366F1]/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 border border-[#6366F1]/20"
              onClick={handleNext}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="bg-[#0a0a1a] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="aspect-video relative">
                <img
                  src={events[currentIndex].url}
                  alt={events[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-b from-[#0a0a1a] to-black">
                <div className="text-[#6366F1] text-sm font-semibold mb-2">
                  {events[currentIndex].date}
                </div>
                <h3 className="text-white text-3xl font-bold mb-4">
                  {events[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  {events[currentIndex].description}
                </p>
                <div className="inline-block px-6 py-2 bg-[#6366F1]/10 backdrop-blur-sm rounded-full text-[#6366F1] border border-[#6366F1]/20">
                  {events[currentIndex].attendees}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;