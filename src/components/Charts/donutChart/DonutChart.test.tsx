import { render, screen } from '@testing-library/react';
import DonutChart from './DonutChart';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, beforeEach } from 'vitest';
import { mockData } from './mock';

beforeEach(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('DonutChart Component', () => {
  it('renders without crashing', () => {
    render(
      <DonutChart
        data={mockData}
        title="Top Universities"
        centerText="Universities"
        isDonutChart
        toolTipMessage="hi"
      />,
    );
    expect(screen.getByText('Top Universities')).toBeInTheDocument();
  });

  it('renders all legend items with values and percentages', () => {
    render(<DonutChart data={mockData} title="Legend Test" centerText="Schools" isDonutChart toolTipMessage="hi" />);
    mockData.forEach(({ name, value, percentage }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(String(value))).toBeInTheDocument();
      expect(screen.getByText(percentage)).toBeInTheDocument();
    });
  });

  it('renders recharts pie chart svg', () => {
    const { container } = render(
      <DonutChart data={mockData} title="Chart" centerText="Data" isDonutChart toolTipMessage="hi" />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('handles empty data without crashing', () => {
    render(<DonutChart data={[]} title="Empty Chart" centerText="None" isDonutChart toolTipMessage="hi" />);
    expect(screen.getByText('Empty Chart')).toBeInTheDocument();
  });
});
