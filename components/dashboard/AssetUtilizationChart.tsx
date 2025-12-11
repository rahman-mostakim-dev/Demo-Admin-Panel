'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

const AssetUtilizationChart = () => {
  const data = [
    { name: 'Jan 10', value: 6 },
    { name: 'Jan 11', value: 8 },
    { name: 'Jan 12', value: 7 },
    { name: 'Jan 13', value: 9 },
    { name: 'Jan 14', value: 5 },
    { name: 'Jan 15', value: 11 },
    { name: 'Jan 16', value: 8 },
    { name: 'Jan 18', value: 12 },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
           <h3 className="text-lg font-bold text-gray-900">Asset Utlization</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-medium">Devices</button>
          <button className="px-4 py-1.5 bg-white text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors">Apps</button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors ml-2">
            This Month
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">Average Used</div>
        <div className="flex items-baseline gap-3">
          <div className="text-4xl font-bold text-gray-900">8.4 Hrs</div>
          <div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-md flex items-center gap-1">
            ↑ 37.8%
          </div>
        </div>
      </div>

      <div className="h-48 w-full relative">
         {/* Dashed line for threshold */}
         <div className="absolute top-[30%] left-0 right-0 border-t-2 border-dashed border-gray-300 z-0 flex items-center">
            <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full absolute -left-2 transform -translate-y-1/2">12 hrs</span>
         </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }} 
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="value" radius={[6, 6, 6, 6]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.value > 10 ? '#312E81' : '#E0E7FF'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AssetUtilizationChart;
