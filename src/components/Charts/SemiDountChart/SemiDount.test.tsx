import { render, screen } from '@testing-library/react';
import SemiDountChart from './SemiDountChart';
import { beforeEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { mockData } from './mock';

beforeEach(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('SemiDonutChart Component', () => {
  it('renders without crashing', () => {
    render(<SemiDountChart data={mockData} title="Total" centerText="Universities" isDonutChart toolTipMessage="hi" />);
  });

  it('renders chart title', () => {
    render(<SemiDountChart data={mockData} title="Custom" centerText="Schools" isDonutChart toolTipMessage="hi" />);
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  it('renders all legend items correctly', () => {
    render(<SemiDountChart data={mockData} title="Custom" centerText="Schools" isDonutChart toolTipMessage="hi" />);
    expect(screen.getByText('Harvard')).toBeInTheDocument();
    expect(screen.getByText('Stanford')).toBeInTheDocument();
    expect(screen.getByText('MIT')).toBeInTheDocument();
    expect(screen.getByText('Yale')).toBeInTheDocument();
    expect(screen.getByText('Columbia')).toBeInTheDocument();
    expect(screen.getByText('UChicago')).toBeInTheDocument();
  });

  it('renders all values and percentages correctly', () => {
    render(<SemiDountChart data={mockData} title="Custom" centerText="Schools" isDonutChart toolTipMessage="hi" />);
    expect(screen.getByText('45')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();

    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('23%')).toBeInTheDocument();
    expect(screen.getByText('17%')).toBeInTheDocument();
    expect(screen.getByText('13%')).toBeInTheDocument();
    expect(screen.getByText('10%')).toBeInTheDocument();
    expect(screen.getByText('7%')).toBeInTheDocument();
  });

  it('renders recharts svg pie chart', () => {
    const { container } = render(
      <SemiDountChart data={mockData} title="Chart" centerText="Data" isDonutChart toolTipMessage="hi" />,
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('does not break if toolTipMessage is false', () => {
    render(<SemiDountChart data={mockData} title="No Icon" centerText="None" isDonutChart toolTipMessage="hi" />);
    expect(screen.getByText('No Icon')).toBeInTheDocument();
  });

  it('renders with empty data without crashing', () => {
    render(<SemiDountChart data={[]} title="Empty Data" centerText="Nothing" isDonutChart toolTipMessage="hi" />);
    expect(screen.getByText('Empty Data')).toBeInTheDocument();
  });
});
