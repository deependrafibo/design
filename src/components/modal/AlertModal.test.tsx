import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { AlertModal } from './AlertModal';

const mockOnClose = vi.fn();
const mockOnCountdownEnd = vi.fn();
const mockPrimaryAction = vi.fn();
const mockSecondaryAction = vi.fn();

describe('AlertModal Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const defaultProps = {
    isOpen: true,
    title: 'Test Modal',
    description: 'Test Description',
    onClose: mockOnClose,
  };

  it('renders the modal when isOpen is true', () => {
    render(<AlertModal {...defaultProps} />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(<AlertModal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('renders without description', () => {
    const propsWithoutDescription = { ...defaultProps };

    render(<AlertModal {...propsWithoutDescription} />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
  });

  describe('Icon Types', () => {
    it('renders video icon by default', () => {
      render(<AlertModal {...defaultProps} />);
      const img = screen.getByAltText('video off');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src');
    });

    it('renders mic icon when iconType is "mic"', () => {
      render(<AlertModal {...defaultProps} iconType="mic" />);
      const img = screen.getByAltText('mic off');
      expect(img).toBeInTheDocument();
    });

    it('renders idle icon when iconType is "idle"', () => {
      render(<AlertModal {...defaultProps} iconType="idle" />);
      const img = screen.getByAltText('idle');
      expect(img).toBeInTheDocument();
    });

    it('renders cross icon when iconType is "cross"', () => {
      render(<AlertModal {...defaultProps} iconType="cross" />);
      const img = screen.getByAltText('cross');
      expect(img).toBeInTheDocument();
    });

    it('renders custom icon when icon prop is provided', () => {
      const customIcon = <div data-testid="custom-icon">Custom Icon</div>;
      render(<AlertModal {...defaultProps} icon={customIcon} />);

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      expect(screen.queryByAltText('video off')).not.toBeInTheDocument();
    });
  });

  describe('Action Buttons', () => {
    it('renders primary action button', () => {
      render(
        <AlertModal
          {...defaultProps}
          primaryAction={{
            label: 'Primary Button',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      const button = screen.getByText('Primary Button');
      expect(button).toBeInTheDocument();
    });

    it('renders secondary action button', () => {
      render(
        <AlertModal
          {...defaultProps}
          secondaryAction={{
            label: 'Secondary Button',
            onClick: mockSecondaryAction,
          }}
        />,
      );

      const button = screen.getByText('Secondary Button');
      expect(button).toBeInTheDocument();
    });

    it('calls primaryAction onClick when primary button is clicked', () => {
      render(
        <AlertModal
          {...defaultProps}
          primaryAction={{
            label: 'Primary',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      const button = screen.getByText('Primary');
      fireEvent.click(button);
      expect(mockPrimaryAction).toHaveBeenCalledTimes(1);
    });

    it('calls secondaryAction onClick when secondary button is clicked', () => {
      render(
        <AlertModal
          {...defaultProps}
          secondaryAction={{
            label: 'Secondary',
            onClick: mockSecondaryAction,
          }}
        />,
      );

      const button = screen.getByText('Secondary');
      fireEvent.click(button);
      expect(mockSecondaryAction).toHaveBeenCalledTimes(1);
    });

    it('renders both action buttons together', () => {
      render(
        <AlertModal
          {...defaultProps}
          primaryAction={{
            label: 'Cancel',
            onClick: mockPrimaryAction,
          }}
          secondaryAction={{
            label: 'Confirm',
            onClick: mockSecondaryAction,
          }}
        />,
      );

      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });

    it('applies custom variant to primary action button', () => {
      render(
        <AlertModal
          {...defaultProps}
          primaryAction={{
            label: 'Primary',
            onClick: mockPrimaryAction,
            variant: 'primary',
          }}
        />,
      );

      const button = screen.getByText('Primary');
      expect(button).toBeInTheDocument();
    });

    it('applies custom className to action buttons', () => {
      render(
        <AlertModal
          {...defaultProps}
          primaryAction={{
            label: 'Primary',
            onClick: mockPrimaryAction,
            className: 'custom-primary-class',
          }}
          secondaryAction={{
            label: 'Secondary',
            onClick: mockSecondaryAction,
            className: 'custom-secondary-class',
          }}
        />,
      );

      const primaryButton = screen.getByText('Primary');
      const secondaryButton = screen.getByText('Secondary');

      expect(primaryButton).toHaveClass('custom-primary-class');
      expect(secondaryButton).toHaveClass('custom-secondary-class');
    });
  });

  describe('Countdown Timer', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('displays countdown in primary action label', () => {
      render(
        <AlertModal
          {...defaultProps}
          countdownSeconds={5}
          primaryAction={{
            label: 'Close in 5s',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      expect(screen.getByText('Close in 5s')).toBeInTheDocument();
    });

    it('updates countdown every second', async () => {
      render(
        <AlertModal
          {...defaultProps}
          countdownSeconds={3}
          primaryAction={{
            label: 'Close in 3s',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      expect(screen.getByText('Close in 3s')).toBeInTheDocument();

      vi.advanceTimersByTime(1000);
      await waitFor(() => {
        expect(screen.getByText('Close in 2s')).toBeInTheDocument();
      });

      vi.advanceTimersByTime(1000);
      await waitFor(() => {
        expect(screen.getByText('Close in 1s')).toBeInTheDocument();
      });
    });

    it('calls onCountdownEnd when countdown reaches zero', async () => {
      render(
        <AlertModal
          {...defaultProps}
          countdownSeconds={2}
          onCountdownEnd={mockOnCountdownEnd}
          primaryAction={{
            label: 'Close in 2s',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      vi.advanceTimersByTime(2000);

      await waitFor(() => {
        expect(mockOnCountdownEnd).toHaveBeenCalledTimes(1);
      });
    });

    it('does not start countdown when modal is closed', async () => {
      render(
        <AlertModal
          {...defaultProps}
          isOpen={false}
          countdownSeconds={3}
          onCountdownEnd={mockOnCountdownEnd}
          primaryAction={{
            label: 'Close in 3s',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      vi.advanceTimersByTime(5000);

      expect(mockOnCountdownEnd).not.toHaveBeenCalled();
    });
  });

  describe('Styling', () => {
    it('applies custom className to modal', () => {
      const { container } = render(<AlertModal {...defaultProps} className="custom-modal-class" />);

      const dialogContent = container.querySelector('.custom-modal-class');
      expect(dialogContent).toBeInTheDocument();
    });

    it('applies default styles to modal', () => {
      const { container } = render(<AlertModal {...defaultProps} />);

      const dialogContent = container.querySelector('.bg-white.rounded-\\[6px\\]');
      expect(dialogContent).toBeInTheDocument();
    });
  });

  describe('Modal Behavior', () => {
    it('handles modal close from dialog component', () => {
      render(<AlertModal {...defaultProps} />);

      // The dialog component should be rendered
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });

    it('resets countdown when countdownSeconds prop changes', async () => {
      const { rerender } = render(
        <AlertModal
          {...defaultProps}
          countdownSeconds={5}
          primaryAction={{
            label: 'Close in 5s',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      expect(screen.getByText('Close in 5s')).toBeInTheDocument();

      rerender(
        <AlertModal
          {...defaultProps}
          countdownSeconds={10}
          primaryAction={{
            label: 'Close in 10s',
            onClick: mockPrimaryAction,
          }}
        />,
      );

      await waitFor(() => {
        expect(screen.getByText('Close in 10s')).toBeInTheDocument();
      });
    });
  });
});
