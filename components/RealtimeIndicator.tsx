'use client';

import { Activity } from 'lucide-react';

interface RealtimeIndicatorProps {
  isConnected: boolean;
}

export default function RealtimeIndicator({ isConnected }: RealtimeIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}>
          {isConnected && (
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Activity size={16} className={isConnected ? 'text-green-500' : 'text-red-500'} />
        <span className={`text-sm font-medium ${isConnected ? 'text-green-500' : 'text-red-500'}`}>
          {isConnected ? 'Live' : 'Disconnected'}
        </span>
      </div>
    </div>
  );
}
