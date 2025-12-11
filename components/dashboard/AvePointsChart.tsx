'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AvePointsChart = () => {
    const data = [
        { name: 'Score', value: 79 },
        { name: 'Remaining', value: 21 },
    ];
    const COLORS = ['#FF5F1F', '#F3F4F6'];

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold text-gray-900">Ave Points</h3>
            </div>

            <div className="relative h-48 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="70%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-4xl font-bold text-gray-900">79<span className="text-xl text-gray-400">%</span></div>
                </div>
            </div>

            <div className="text-center">
                <p className="text-sm font-medium text-gray-900">Your Score <span className="text-[#FF5F1F]">130/152</span></p>
            </div>
        </div>
    );
};

export default AvePointsChart;
