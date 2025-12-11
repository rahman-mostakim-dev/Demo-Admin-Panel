import React from 'react';
import { Search, HelpCircle, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-20 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
            {/* Search Bar */}
            <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search or type a command"
                    className="block w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50/50"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-xs border border-gray-200 rounded px-1.5 py-0.5">⌘ F</span>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <HelpCircle size={22} />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors relative">
                    <Bell size={22} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        {/* Placeholder for user image */}
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 text-sm">Alesia K.</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
