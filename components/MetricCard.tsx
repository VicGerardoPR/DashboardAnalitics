'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
}

export default function MetricCard({ title, value, change, prefix = '', suffix = '' }: MetricCardProps) {
  const isPositive = change >= 0;
  
  const formatValue = () => {
    if (prefix === '$') return formatCurrency(value);
    if (suffix === '%') return value.toFixed(1);
    return formatNumber(value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
          isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {formatPercentage(change)}
        </div>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">
          {prefix}{formatValue()}{suffix}
        </span>
      </div>
      
      <p className="text-gray-500 text-xs mt-2">vs last period</p>
    </div>
  );
}
