import { render, screen } from '@testing-library/react';
import { RadarChart } from './RadarChart';
import { radarMockData, chartConfig } from './sampleData';

describe('RadarChart', () => {
  it('renders with data', () => {
    render(<RadarChart chartData={radarMockData} chartConfig={chartConfig} />);
    // The chart should render without throwing errors
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('renders empty state when no data', () => {
    render(<RadarChart chartData={[]} chartConfig={chartConfig} />);
    expect(screen.getByText('No data available for radar chart')).toBeInTheDocument();
  });

  it('renders with minimal data', () => {
    const minimalData = [
      {
        skill: 'Test Skill',
        talent_score: 5,
        cohort_average: 6,
        top_competencies: false,
        total_score: 10,
      },
    ];
    render(<RadarChart chartData={minimalData} chartConfig={chartConfig} />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
