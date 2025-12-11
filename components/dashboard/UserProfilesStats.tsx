import React from 'react';
import { ChevronRight } from 'lucide-react';

const UserProfilesStats = () => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                    {/* Icon placeholder if needed, design shows just text with icon maybe? */}
                    <span className="text-sm font-medium">User Profiles</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-1">1.8K</div>
                <div className="text-xs text-gray-500">12 new Profiles add this week</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">
                        <span>Devices</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">2.8K</div>
                    <div className="text-xs text-gray-500 mt-1">11 New Devices</div>
                </div>
                <div className="bg-[#FFF5F0] p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2 text-[#FF5F1F] text-sm">
                        <span>Apps</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">84</div>
                    <div className="text-xs text-gray-500 mt-1">4 New Apps</div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilesStats;
