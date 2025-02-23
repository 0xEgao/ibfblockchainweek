import React, { useState } from 'react';

export default function BlockchainClub() {
  const [activeTab, setActiveTab] = useState("about");

  // Custom Card Components with enhanced hover and shadow effects
  function Card({ children, className = "", hover = true }) {
    return (
      <div className={`
        rounded-lg border border-gray-800 bg-black/40 backdrop-blur-sm
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1' : ''}
        ${className}
      `}>
        {children}
      </div>
    );
  }

  function CardHeader({ children }) {
    return (
      <div className="flex flex-col space-y-1.5 p-6">{children}</div>
    );
  }

  function CardTitle({ children }) {
    return (
      <h3 className="text-2xl font-semibold text-white">{children}</h3>
    );
  }

  function CardDescription({ children }) {
    return (
      <p className="text-gray-400">{children}</p>
    );
  }

  function CardContent({ children, className = "" }) {
    return (
      <div className={`p-6 pt-0 ${className}`}>{children}</div>
    );
  }

  // Enhanced Badge Component with hover effect
  function Badge({ children }) {
    return (
      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700">
        {children}
      </span>
    );
  }

  // Photo Gallery Component
  function PhotoGallery({ images }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg group transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // [Previous Icon Components remain unchanged]
  function BookOpen() {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }

  function Users() {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  function Calendar() {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }

  function Mail() {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }

  const TabButton = ({ icon: Icon, label, value }) => (
    <button
      className={`
        flex items-center gap-2 justify-center p-2 transition-all duration-300
        hover:bg-black/50 rounded-lg
        ${activeTab === value 
          ? "border-b-2 border-indigo-500 text-indigo-500 shadow-lg shadow-indigo-500/20" 
          : "text-gray-400"}
      `}
      onClick={() => setActiveTab(value)}
    >
      <Icon />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-gray-100 p-6">
      {/* Enhanced Hero Section with Gradient Background */}
      <div className="mb-12 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-emerald-500/20 blur-[100px] -z-10"></div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-emerald-500 text-transparent bg-clip-text">
        Indian Blockchain Fraternity
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Decentralizing Ideas, Empowering Minds.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Tabs List */}
        <div className="grid w-full grid-cols-4 mb-8 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
          <TabButton icon={BookOpen} label="About" value="about" />
          <TabButton icon={Users} label="Leadership" value="leadership" />
          <TabButton icon={Calendar} label="Activities" value="activities" />
          <TabButton icon={Mail} label="Contact" value="contact" />
        </div>

        {/* [Previous Tab Content Sections remain unchanged] */}
        {activeTab === "about" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className= "font-extrabold"><b> Indian Blockchain Fraternity </b></CardTitle>
                <CardDescription>
                The Indian Blockchain Fraternity (IBF) is the official blockchain club of Bennett University, dedicated to empowering students with knowledge, skills, and opportunities in the world of blockchain and Web3.
At IBF, we believe that blockchain is the future, and we aim to bridge the gap between students and the industry by fostering a strong community of developers, enthusiasts, and innovators.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-400">
                    At IBF, our mission is to educate, innovate, and connect students in the blockchain space. We aim to: <br /> </p>
                    <li>📚 Educate through workshops, mentorship, and hands-on learning.</li>  
<li>💡 Innovate by fostering real-world blockchain projects.</li>  
<li>🤝 Connect students with industry leaders and startups.</li>  
<li>🏆 Create opportunities via hackathons, competitions, and events.</li>  
<li>🚀 Inspire leadership in the evolving Web3 ecosystem.</li>  
<li>🌍 We are committed to shaping the next generation of blockchain pioneers!</li>


                
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-2">What We Do</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>🚀 Host workshops on blockchain, NFTs & DeFi.</li>  
<li>💡 Organize hackathons with mentorship & prizes.</li>  
<li>🤝 Collaborate with top blockchain firms & startups.</li>  
<li>👥 Build a community of Web3 enthusiasts.</li>  
<li>🌍 Connect students with industry leaders & experts.</li>  
<li>🎯 Encourage real-world projects & open-source contributions.</li>   
<li>🔗 Conduct hands-on training on smart contracts & dApps.</li>  
<li>📢 Spread awareness about decentralization & Web3 adoption.</li>  
<li>🏅 Recognize and reward top talent in blockchain development.</li>  

                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Club Highlights</h3>
                  <PhotoGallery 
                    images={[
                      {
                        url: "src/assets/1.jpeg",
                        alt: "Team Photo",
                        description: "Our amazing team at the annual blockchain conference"
                      },
                      {
                        url: "src/assets/2.jpeg",
                        alt: "Workshop",
                        description: "Smart Contract Development Workshop"
                      },
                      {
                        url: "src/assets/g4.JPG",
                        alt: "Hackathon",
                        description: "Winners of the 2024 Blockchain Hackathon"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* [Rest of the tab content components remain unchanged] */}
{/* Previous code remains unchanged until leadership section */}

{activeTab === "leadership" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
    {/* President Card */}
    <Card className=''>
      <CardContent className="pt-6">
        <div className="text-center ">
          <div className="w-80 h-80 mx-auto mb-4 overflow-hidden rounded group">
            <img
              src="src/assets/president.jpeg"
              alt="President"
              className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-150 ml-10"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">Aditya krishna sharma</h3>
          <Badge >President</Badge>
          <p className="text-gray-400 text-sm mt-2">
            Blockchain Developer & Researcher
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Vice President Card */}
    <Card >
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="w-80 h-80 mx-auto mb-4 overflow-hidden rounded group">
            <img
              src="src/assets/vc.jpeg"
              alt="Vice President"
              className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-150"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">Indresh Agrawal</h3>
          <Badge>Vice President</Badge>
          <p className="text-gray-400 text-sm mt-2">
            Smart Contract Specialist
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
)}

{/* Rest of the code remains unchanged */}
        {activeTab === "activities" && (
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-black/40 hover:bg-black/60 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Blockchain Workshop</h3>
                    <Badge>Next Week</Badge>
                  </div>
                  <p className="text-gray-400 mt-2">
                    Introduction to Smart Contracts Development
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/40 hover:bg-black/60 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Guest Speaker Series</h3>
                    <Badge>Upcoming</Badge>
                  </div>
                  <p className="text-gray-400 mt-2">
                    Web3 and the Future of Finance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "contact" && (
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Join our community or reach out with questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400 flex items-center gap-2">
                      <Mail /> blockchain.club@example.com
                    </p>
                    <p className="text-gray-400">Location: Tech Building, Room 301</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Meeting Schedule</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar /> Every Wednesday @ 5:00 PM
                    </p>
                    <p className="text-gray-400">Open to all interested students!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}