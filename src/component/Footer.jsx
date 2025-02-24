import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [cryptoPrice, setCryptoPrice] = useState({ eth: '0.00', btc: '0.00' });
    const [email, setEmail] = useState('');
    
    const menuItems = [
        { name: 'Timeline', link: '#' },
        { name: 'Workshop', link: '#' },
        { name: 'Sponsors', link: '#' },
        { name: 'About Us', link: '#' }
    ];

    const resourceLinks = [
        { name: 'Blockchain Guides', link: '#' },
        { name: 'Hands-on Tutorials', link: '#' },
        { name: 'Development Toolkits', link: '#' },
        { name: 'Code Repositories', link: '#' },
        { name: 'Smart Contract Templates', link: '#' }
    ];
    

    const developerInfo = {
        name: 'Rahul Gujjar',
        role: 'Website Developer',
        image: '/images/rahul1.jpg',
        ethereum_address: 'Tech Team Member'
    };

    // Simulated crypto price update
    useEffect(() => {
        const interval = setInterval(() => {
            setCryptoPrice({
                eth: (Math.random() * (2000 - 1800) + 1800).toFixed(2),
                btc: (Math.random() * (40000 - 38000) + 38000).toFixed(2)
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your subscription logic here
        setEmail('');
    };

    return (
        <footer className="relative bg-black text-gray-300 overflow-hidden">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-full">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                width: '2px',
                                height: '2px',
                                background: '#6366f1',
                                opacity: 0.3,
                                borderRadius: '50%'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Live Crypto Ticker */}
            <div className="border-b border-gray-800 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex justify-end space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <span className="text-[#6366f1]">ETH:</span>
                            <span className="font-mono">${cryptoPrice.eth}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-[#6366f1]">BTC:</span>
                            <span className="font-mono">${cryptoPrice.btc}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <img src="https://blockchainweek.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIBF_logo.b265a8ae.png&w=256&q=75" className='w-20' alt="" />
                            </div>
                            
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                        Indian Blockchain Fraternity at Bennett University fosters blockchain innovation through workshops, hackathons, and collaboration, empowering students in Web3 technologies.
                        </p>
                        
                        {/* Newsletter Subscription */}
                        <div className="pt-4">
                            <h4 className="text-white text-sm font-semibold mb-3">Join Our Newsletter</h4>
                            <form onSubmit={handleSubscribe} className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="bg-[#1a1a1a] text-sm rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-[#6366f1] border border-gray-800"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#6366f1] text-white px-4 py-2 rounded-r-lg hover:bg-[#4f46e5] transition-all duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.link}
                                        className="text-gray-400 hover:text-[#6366f1] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="text-[#6366f1] transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
                        <ul className="space-y-4">
                            {resourceLinks.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.link}
                                        className="text-gray-400 hover:text-[#6366f1] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="text-[#6366f1] transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developer Card */}
                    <div className="bg-[#1a1a1a] p-6 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-[#6366f1] transition-all duration-500 group">
                        <h3 className="text-white text-lg font-semibold mb-6">Developer</h3>
                        <div className="flex flex-col items-center">
                            <div className="relative mb-4">
                                <img 
                                    src={developerInfo.image} 
                                    alt={developerInfo.name}
                                    className="w-40 h-40 rounded-full  object-cover ring-2 ring-[#6366f1] p-1 group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#6366f1] rounded-full border-2 border-gray-800"></span>
                            </div>
                            <h4 className="text-white text-lg font-medium">{developerInfo.name}</h4>
                            <p className="text-gray-400 text-sm mb-3">{developerInfo.role}</p>
                            <div className="text-xs font-mono text-[#6366f1] bg-[#1a1a1a] px-3 py-1 rounded-full">
                                {developerInfo.ethereum_address}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-16">
                    <a href="#" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#6366f1] hover:text-white transition-all duration-300 group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                            className="group-hover:rotate-12 transition-transform duration-300">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                    </a>
                    <a href="#" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#6366f1] hover:text-white transition-all duration-300 group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className="group-hover:rotate-12 transition-transform duration-300">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a href="#" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#6366f1] hover:text-white transition-all duration-300 group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className="group-hover:rotate-12 transition-transform duration-300">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </a>
                    <a href="#" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#6366f1] hover:text-white transition-all duration-300 group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className="group-hover:rotate-12 transition-transform duration-300">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white text-sm">
                            © {new Date().getFullYear()} IBF. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-white hover:text-gray-400 text-sm">Privacy Policy</a>
                            <a href="#" className="text-white hover:text-gray-400 text-sm">Terms of Service</a>
                        </div>
                        <p className="text-white text-sm flex items-center gap-2">
                            Made with 
                            <span className="text-[#6366f1] animate-pulse">❤</span>
                            by  Rahul Gujjar
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
