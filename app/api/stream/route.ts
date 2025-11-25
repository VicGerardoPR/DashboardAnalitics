import { NextResponse } from 'next/server';
import { generateMetrics, generateChartData, generateBarData, generateRecentActivity } from '@/lib/mockData';

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const sendData = () => {
        const data = {
          metrics: generateMetrics(),
          chartData: generateChartData(),
          barData: generateBarData(),
          recentActivity: generateRecentActivity(),
          timestamp: new Date().toISOString(),
        };

        const message = `data: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(encoder.encode(message));
      };

      // Send initial data immediately
      sendData();

      // Send updates every 5 seconds
      const interval = setInterval(sendData, 5000);

      // Cleanup on client disconnect
      const cleanup = () => {
        clearInterval(interval);
        controller.close();
      };

      // Handle client disconnect
      setTimeout(cleanup, 300000); // 5 minutes max
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
