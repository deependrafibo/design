import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ModifiedProgressBar } from './ModifiedProgressBar';
import '@testing-library/jest-dom/vitest';

describe('ModifiedProgressBar component', () => {
  it('renders with label and progress bar based on progress prop', () => {
    render(<ModifiedProgressBar label="Uploading file..." progress={50} />);
    expect(screen.getByText('Uploading file...')).toBeInTheDocument();
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 50%');
  });

  it('renders the progress bar with 0% width when progress is 0', () => {
    render(<ModifiedProgressBar label="Preparing file..." progress={0} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 0%');
  });

  it('renders the progress bar with 100% width when progress is 100', () => {
    render(<ModifiedProgressBar label="Upload Complete" progress={100} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 100%');
  });

  it('displays label correctly', () => {
    render(<ModifiedProgressBar label="File is uploading" progress={30} />);
    expect(screen.getByText('File is uploading')).toBeInTheDocument();
  });

  it('does not display the label when no label is provided', () => {
    render(<ModifiedProgressBar progress={70} label="" />);
    expect(screen.queryByText('File is uploading')).not.toBeInTheDocument();
  });
});
