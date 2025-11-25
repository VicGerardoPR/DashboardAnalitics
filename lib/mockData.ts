import { getRandomInRange, getRandomFloat } from './utils';

export interface Metric {
  id: string;
  title: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number;
}

export const generateMetrics = (): Metric[] => {
  return [
    {
      id: 'revenue',
      title: 'Revenue',
      value: getRandomInRange(45000, 65000),
      change: getRandomFloat(-5, 15),
      prefix: '$',
    },
    {
      id: 'users',
      title: 'Active Users',
      value: getRandomInRange(1200, 2800),
      change: getRandomFloat(-3, 20),
    },
    {
      id: 'orders',
      title: 'Orders',
      value: getRandomInRange(150, 350),
      change: getRandomFloat(-10, 25),
    },
    {
      id: 'conversion',
      title: 'Conversion Rate',
      value: getRandomFloat(2.5, 4.8),
      change: getRandomFloat(-2, 8),
      suffix: '%',
    },
  ];
};

export const generateChartData = (points: number = 7): ChartDataPoint[] => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return Array.from({ length: points }, (_, i) => ({
    name: days[i % 7],
    value: getRandomInRange(3000, 8000),
    value2: getRandomInRange(2000, 6000),
  }));
};

export const generateBarData = (): ChartDataPoint[] => {
  return [
    { name: 'Electronics', value: getRandomInRange(4000, 8000) },
    { name: 'Clothing', value: getRandomInRange(3000, 7000) },
    { name: 'Food', value: getRandomInRange(2000, 5000) },
    { name: 'Books', value: getRandomInRange(1500, 4000) },
    { name: 'Sports', value: getRandomInRange(2500, 6000) },
  ];
};

export interface RecentActivity {
  id: string;
  type: 'sale' | 'user' | 'order';
  message: string;
  time: string;
  amount?: number;
}

export const generateRecentActivity = (): RecentActivity[] => {
  const activities = [
    { type: 'sale' as const, message: 'New sale completed', amount: getRandomInRange(50, 500) },
    { type: 'user' as const, message: 'New user registered' },
    { type: 'order' as const, message: 'Order received', amount: getRandomInRange(100, 800) },
    { type: 'sale' as const, message: 'Premium subscription', amount: getRandomInRange(30, 100) },
    { type: 'user' as const, message: 'User upgraded account' },
  ];

  return activities.slice(0, 3).map((activity, i) => ({
    ...activity,
    id: `activity-${Date.now()}-${i}`,
    time: `${getRandomInRange(1, 59)}m ago`,
  }));
};
