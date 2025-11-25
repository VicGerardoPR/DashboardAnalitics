import { NextResponse } from 'next/server';
import { generateMetrics, generateChartData, generateBarData, generateRecentActivity } from '@/lib/mockData';

// CRITICAL: Force this route to be dynamic
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const sendData = () => {
        try {
          const data = {
            metrics: generateMetrics(),
            chartData: generateChartData(),
            barData: generateBarData(),
            recentActivity: generateRecentActivity(),
            timestamp: new Date().toISOString(),
          };

          const message = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(encoder.encode(message));
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

      // Send initial data immediately
      sendData();

      // Send updates every 5 seconds
      const interval = setInterval(sendData, 5000);

      // Cleanup on client disconnect
      const cleanup = () => {
        clearInterval(interval);
        try {
          controller.close();
        } catch (e) {
          // Controller already closed
        }
      };

      // Auto cleanup after 5 minutes
      setTimeout(cleanup, 300000);
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}
