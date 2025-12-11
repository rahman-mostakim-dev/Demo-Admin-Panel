import React from 'react';
import {
    LayoutDashboard,
    User,
    Monitor,
    Grid,
    FileText,
    Code,
    Shield,
    Settings,
    HelpCircle,
    Plus
} from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col p-6 fixed left-0 top-0 overflow-y-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">Oppo Device</span>
            </div>

            {/* Add Asset Button */}
            <button className="w-full bg-[#FF5F1F] hover:bg-[#E54E10] text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 mb-8 transition-colors cursor-pointer shadow-md shadow-orange-200">
                <Plus size={18} />
                <span className="font-medium">Add Asset</span>
            </button>

            {/* Navigation Groups */}
            <div className="flex-1 space-y-8">
                {/* General */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">General</h3>
                    <div className="space-y-1">
                        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                        <NavItem icon={<User size={20} />} label="My Profile" />
                        <NavItem icon={<Monitor size={20} />} label="All Devices" />
                        <NavItem icon={<Grid size={20} />} label="Applications" />
                    </div>
                </div>

                {/* Utilities */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Utilities</h3>
                    <div className="space-y-1">
                        <NavItem icon={<FileText size={20} />} label="Assignments" />
                        <NavItem icon={<Code size={20} />} label="Developer" />
                        <NavItem icon={<Shield size={20} />} label="Privacy & Security" />
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Support</h3>
                    <div className="space-y-1">
                        <NavItem icon={<Settings size={20} />} label="Settings" />
                        <NavItem icon={<HelpCircle size={20} />} label="Help & Support" badge="8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) => {
    return (
        <div className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors ${active ? 'bg-[#FFF5F0] text-[#FF5F1F]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
            <div className="flex items-center gap-3">
                {icon}
                <span className="font-medium">{label}</span>
            </div>
            {badge && (
                <span className="bg-[#4F46E5] text-white text-xs font-bold px-2 py-0.5 rounded-md">
                    {badge}
                </span>
            )}
        </div>
    );
};

export default Sidebar;
