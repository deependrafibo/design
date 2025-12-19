import { render, screen, act } from '@testing-library/react';
import { Timer } from './Timer';
import { formatTime } from './utils';

// Mock the timer
jest.useFakeTimers();

describe('Timer Component', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders with correct initial time', () => {
    render(<Timer startTime={60} />);
    expect(screen.getByText('01:00')).toBeInTheDocument();
  });

  it('counts down correctly', () => {
    render(<Timer startTime={60} />);

    // Initial time
    expect(screen.getByText('01:00')).toBeInTheDocument();

    // Advance timer by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('00:59')).toBeInTheDocument();

    // Advance timer by 10 more seconds
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(screen.getByText('00:49')).toBeInTheDocument();
  });

  it('counts up correctly', () => {
    render(<Timer startTime={0} countUp={true} />);

    // Initial time
    expect(screen.getByText('00:00')).toBeInTheDocument();

    // Advance timer by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('00:01')).toBeInTheDocument();

    // Advance timer by 10 more seconds
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(screen.getByText('00:11')).toBeInTheDocument();
  });

  it('calls onComplete when countdown reaches zero', () => {
    const onCompleteMock = jest.fn();
    render(<Timer startTime={2} onComplete={onCompleteMock} />);

    // Advance timer by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(onCompleteMock).toHaveBeenCalledTimes(1);
    expect(screen.getByText('00:00')).toBeInTheDocument();
  });

  it('calls onComplete when count-up timer reaches completionTime', () => {
    const onCompleteMock = jest.fn();
    render(<Timer startTime={0} countUp={true} completionTime={5} onComplete={onCompleteMock} />);

    // Advance timer by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(onCompleteMock).toHaveBeenCalledTimes(1);
    expect(screen.getByText('00:05')).toBeInTheDocument();
  });

  it('stops counting up after reaching completionTime', () => {
    render(<Timer startTime={0} countUp={true} completionTime={3} />);

    // Advance timer past the completion time
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    // Should still be at 00:03
    expect(screen.getByText('00:03')).toBeInTheDocument();
  });

  it('calls onZero when timer reaches zero', () => {
    const onZeroMock = jest.fn();
    render(<Timer startTime={2} onZero={onZeroMock} />);

    // Advance timer by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(onZeroMock).toHaveBeenCalledTimes(1);
  });

  it('stops counting down after reaching zero', () => {
    render(<Timer startTime={2} />);

    // Advance timer past the end
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Should still be at 00:00
    expect(screen.getByText('00:00')).toBeInTheDocument();
  });

  it('resets timer when startTime changes', () => {
    const { rerender } = render(<Timer startTime={10} />);

    // Advance timer by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('00:08')).toBeInTheDocument();

    // Change startTime
    rerender(<Timer startTime={30} />);
    expect(screen.getByText('00:30')).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    render(<Timer startTime={60} className="custom-timer" />);

    const timerElement = screen.getByText('01:00');
    expect(timerElement.parentElement).toHaveClass('custom-timer');
  });
});

// Test the formatTime utility separately
describe('formatTime utility', () => {
  it('formats seconds correctly', () => {
    expect(formatTime(0)).toBe('00:00');
    expect(formatTime(30)).toBe('00:30');
    expect(formatTime(60)).toBe('01:00');
    expect(formatTime(90)).toBe('01:30');
    expect(formatTime(3661)).toBe('61:01'); // Over an hour
  });
});
