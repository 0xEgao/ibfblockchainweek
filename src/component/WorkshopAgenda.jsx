import React, { useState } from 'react';

const WorkshopAgenda = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  const agenda = [
    {
      day: "Day 1",
      date: "15th April",
      time: "6:30 PM",
      title: "Intro to Dapps using Solidity",
      description: "A complete introduction to Solidity programming and Dapps (Decentralized Apps). You will get to know all about History and Working of Blockchain, Ethereum, EVM, Transactions, Gas Fees, Blockchain Wallets, NFTs and What exactly is a Dapp.",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      day: "Day 2",
      date: "16th April",
      time: "6:30 PM",
      title: "Advanced Solidity concepts",
      description: "Here you will learn about how Scalable Smart Contract Development. You will understand how to test and debug your Contracts and eventually Deploy them.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      day: "Day 3",
      date: "17th April",
      time: "6:30 PM",
      title: "Fullstack Blockchain Development",
      description: "Now that you know how to write smart contracts, learn how to deploy them into production. We will understand how to use Frontend Frameworks and Wallets to finally launch your Dapp.",
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      day: "Day 4",
      date: "18th April",
      time: "6:30 PM",
      title: "Building a Voting Smart Contract",
      description: "Practical session on developing a complete voting system using Smart Contracts. Learn about different blockchain platforms and their trade-offs.",
      gradient: "from-teal-600 to-green-600"
    },
    {
      day: "Day 5",
      date: "19th April",
      time: "6:30 PM",
      title: "Smart Contract Auction",
      description: "Time for Battle! In this event, You will be given a problem Auction smart contract along with all the details about the contract and related concepts.",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      day: "Day 6",
      date: "20th April",
      time: "6:30 PM",
      title: "Blockchain Specialisation Workshop",
      description: "Official Blockchain Specialisation in BU by Dr. Vimal Baghel: Blockchain Champion. Learn about career opportunities and industry applications.",
      gradient: "from-emerald-600 to-purple-600"
    }
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