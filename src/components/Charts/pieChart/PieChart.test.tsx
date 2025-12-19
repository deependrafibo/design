import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { mockData } from './mock';
import { PieChart } from './PieChart';

const originalConsoleError = console.error;

beforeEach(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  vi.spyOn(console, 'error').mockImplementation((msg, ...args) => {
    if (typeof msg === 'string' && (msg.includes('fill-rule') || msg.includes('clip-rule'))) return;
    originalConsoleError(msg, ...args);
  });
});

describe('PieChart Component', () => {
  it('renders without crashing', () => {
    render(<PieChart chartData={mockData} />);
    expect(screen.getByText('Pie Chart')).toBeInTheDocument();
  });

  it('renders all chart legends correctly', () => {
    render(<PieChart chartData={mockData} />);
    mockData.forEach((entry) => {
      expect(screen.getByText(entry.name)).toBeInTheDocument();
      expect(screen.getAllByText(entry.value.toString()).length).toBeGreaterThan(0);
      expect(screen.getAllByText(entry.percentage).length).toBeGreaterThan(0);
    });
  });

  it('renders the correct number of legend entries', () => {
    render(<PieChart chartData={mockData} />);
    const percentages = screen.getAllByText(/%/i);
    expect(percentages.length).toBe(mockData.length);
  });

  it('renders chart structure properly', () => {
    render(<PieChart chartData={mockData} />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
