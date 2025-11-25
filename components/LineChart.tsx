'use client';

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  title: string;
}

export default function LineChart({ data, title }: LineChartProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl">
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            stroke="#9CA3AF"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9CA3AF"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Legend 
            wrapperStyle={{ color: '#9CA3AF' }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 4 }}
            activeDot={{ r: 6 }}
            name="Sales"
          />
          <Line 
            type="monotone" 
            dataKey="value2" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', r: 4 }}
            activeDot={{ r: 6 }}
            name="Visitors"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
