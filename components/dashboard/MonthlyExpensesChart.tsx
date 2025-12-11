'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { ChevronRight } from 'lucide-react';

const MonthlyExpensesChart = () => {
    const data = [
        { name: 'Jan', value: 2000 },
        { name: 'Feb', value: 2200 },
        { name: 'Mar', value: 1800 },
        { name: 'Apr', value: 2400 },
        { name: 'May', value: 1600 },
        { name: 'Jun', value: 2800 },
        { name: 'Jul', value: 2600 },
    ];

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">$</div>
                    <span className="text-sm font-medium text-gray-500">Monthly expenses for App</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="mb-6 flex items-baseline gap-3">
                <div className="text-4xl font-bold text-gray-900">$ 3,400</div>
                <div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-md flex items-center gap-1">
                    ↑ 37.8%
                </div>
            </div>

            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" hide />
                        <YAxis hide domain={['dataMin - 500', 'dataMax + 500']} />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            cursor={{ stroke: '#E5E7EB', strokeWidth: 1 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#6366f1"
                            strokeWidth={3}
                            dot={{ r: 0 }}
                            activeDot={{ r: 6, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MonthlyExpensesChart;
