import { NextResponse } from 'next/server';
import { generateMetrics, generateChartData, generateBarData, generateRecentActivity } from '@/lib/mockData';

export async function GET() {
  const data = {
    metrics: generateMetrics(),
    chartData: generateChartData(),
    barData: generateBarData(),
    recentActivity: generateRecentActivity(),
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}
