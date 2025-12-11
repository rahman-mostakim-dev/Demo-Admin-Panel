import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import AvePointsChart from '@/components/dashboard/AvePointsChart';
import UserProfilesStats from '@/components/dashboard/UserProfilesStats';
import MonthlyExpensesChart from '@/components/dashboard/MonthlyExpensesChart';
import AreasToAddress from '@/components/dashboard/AreasToAddress';
import AssetUtilizationChart from '@/components/dashboard/AssetUtilizationChart';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <Sidebar />

            <div className="ml-64">
                <Header />

                <main className="p-8">
                    <WelcomeSection />

                    <div className="grid grid-cols-12 gap-6">
                        {/* Left Column */}
                        <div className="col-span-4 space-y-6">
                            <AvePointsChart />
                            <AreasToAddress />
                        </div>

                        {/* Right Column */}
                        <div className="col-span-8 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <UserProfilesStats />
                                <MonthlyExpensesChart />
                            </div>

                            <AssetUtilizationChart />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
