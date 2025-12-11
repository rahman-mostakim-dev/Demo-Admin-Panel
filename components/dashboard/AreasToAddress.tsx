import React from 'react';

const AreasToAddress = () => {
    const items = [
        {
            icon: (
                <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <span className="text-lg font-bold text-blue-500">G</span>
                </div>
            ),
            title: '24 users not using',
            subtitle: 'G-Suite'
        },
        {
            icon: (
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-sm">
                    <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-1 h-1 bg-white rounded-[1px]"></div>
                        <div className="w-1 h-1 bg-white rounded-[1px]"></div>
                        <div className="w-1 h-1 bg-white rounded-[1px]"></div>
                        <div className="w-1 h-1 bg-white rounded-[1px]"></div>
                    </div>
                </div>
            ),
            title: '9 devices',
            subtitle: 'File Vault Enabled'
        },
        {
            icon: (
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs"></span>
                </div>
            ),
            title: '5 Macs',
            subtitle: 'OS Upgrade Needed'
        },
        {
            icon: (
                <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    {/* Slack icon approximation */}
                    <div className="w-4 h-4 relative">
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-green-400 rounded-sm"></div>
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-red-400 rounded-sm"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-yellow-400 rounded-sm"></div>
                    </div>
                </div>
            ),
            title: 'Slack',
            subtitle: '5 Licence Pending'
        }
    ];

    return (
        <div className="bg-[#FFF8F6] p-6 rounded-3xl">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Areas To Address</h3>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white/50 hover:bg-white rounded-2xl transition-colors cursor-pointer">
                        {item.icon}
                        <div>
                            <div className="text-xs text-gray-500 font-medium">{item.title}</div>
                            <div className="text-sm font-bold text-gray-900">{item.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AreasToAddress;
