import React from 'react';
import { ChevronDown } from 'lucide-react';

const WelcomeSection = () => {
    return (
        <div className="flex items-end justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome Jonathan Cook</h1>
                <p className="text-gray-500 text-sm">Company Statistics — Monday, 17 March 2025</p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                This Month
                <ChevronDown size={16} />
            </button>
        </div>
    );
};

export default WelcomeSection;
