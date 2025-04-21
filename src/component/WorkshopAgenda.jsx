import React, { useState } from 'react';

const WorkshopAgenda = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  const agenda = [
    {
      day: "Day 1",
      date: "14th April",
      time: "6:30 PM",
      title: "Introduction to Blockchain and Smart Contracts (6:30 PM – 8:30 PM) ",
      description: " Join Jay Vardhan Singh from OpenBuild for an enlightening session on blockchain fundamentals and smart contract basics from 6:30 PM to 8:30 PM. ",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      day: "Day 2",
      date: "15th April",
      time: "6:30 PM",
      title: "Smart Contract Development in Solidity & Career Opportunities (6:30 PM – 8:30 PM)",
      description: "Explore smart contract development with Mohit Bhat and discover career opportunities in the blockchain industry. This insightful session runs from 6:30 PM to 8:30 PM and is tailored to enhance your technical skills and professional knowledge.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      day: "Day 3",
      date: "16th April",
      time: "6:30 PM",
      title: "Introduction to Jumbo Blockchain",
      description: "Dive into the Jumbo Blockchain with Kanishak, learning about its unique capabilities from 6:30 PM to 8:30 PM. Participants have a chance to win a $500 bounty for projects that successfully integrate with the Jumbo Blockchain, adding a competitive edge to the learning experience.",
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      day: "Day 5",
      date: "17th April",
      time: "6:30 PM",
      title: "Expert Session | Dr. Vimal Baghel",
      description: "Gain valuable insights into blockchain specialization at BU and explore the future of decentralized technology with Dr. Vimal Baghel. This session will cover emerging trends, industry applications, and career opportunities in the blockchain ecosystem.",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      day: "Day 5",
      date: "18th April",
      time: "6:30 PM",
      title: "Introduction to Sui Chain and Building on Sui",
      description: "Engage in a two-day workshop focusing on the Sui Chain, where you'll learn to build decentralized applications. These sessions provide practical, hands-on experience in blockchain application development. ",
      gradient: "from-teal-600 to-green-600"
    },

  ];

  return (
    <div className="min-h-screen bg-[#0A0B0D] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text mb-4 hover:scale-105 transition-transform duration-300">
            TIMELINE
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {agenda.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredDay(index)}
              onMouseLeave={() => setHoveredDay(null)}
              onClick={() => setSelectedDay(selectedDay === index ? null : index)}
              className="relative group"
            >
              <div className={`
                absolute inset-0 bg-gradient-to-r ${item.gradient}
                opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500
                blur-xl
              `} />
              <div className={`
                relative bg-[#151718] rounded-xl p-6
                transform transition-all duration-500
                ${hoveredDay === index ? 'translate-y-[-8px]' : ''}
                ${selectedDay === index ? 'ring-2 ring-opacity-50 ring-offset-2 ring-offset-[#0A0B0D]' : ''}
                hover:bg-[#1A1B1D]
                cursor-pointer
                border border-gray-800/50
                group-hover:border-gray-700/50
              `}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`
                    font-semibold text-transparent bg-gradient-to-r
                    ${item.gradient} bg-clip-text
                  `}>{item.day}</span>
                  <span className="text-gray-400 text-sm bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400">
                  {item.title}
                </h3>

                <div className="flex items-center text-gray-400 text-sm mb-3 group-hover:text-gray-300">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item.time}
                </div>

                <div className={`
                  overflow-hidden transition-all duration-500
                  ${selectedDay === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        

         
        

       
      </div>
    </div>
  );
};

export default WorkshopAgenda;