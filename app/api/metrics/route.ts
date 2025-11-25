import { NextResponse } from 'next/server';
import { generateMetrics, generateChartData, generateBarData, generateRecentActivity } from '@/lib/mockData';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET() {
  const data = {
    metrics: generateMetrics(),
    chartData: generateChartData(),
    barData: generateBarData(),
    recentActivity: generateRecentActivity(),
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
