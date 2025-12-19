import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip Component', () => {
  const message = 'Sample Tooltip Message';

  it('renders child element', () => {
    render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByText(/hover me/i)).toBeInTheDocument();
  });

  it('does not show tooltip initially', () => {
    render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  it('shows tooltip message on hover', async () => {
    render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText(/hover me/i);
    await userEvent.hover(button);

    expect(screen.getByText(message)).toBeVisible();
  });

  it('hides tooltip message after mouse leave', async () => {
    render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText(/hover me/i);
    await userEvent.hover(button);
    expect(screen.getByText(message)).toBeVisible();

    await userEvent.unhover(button);
    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  it('accepts and applies custom className', async () => {
    render(
      <Tooltip message={message} className="custom-tooltip-class">
        <button>Hover me</button>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText(/hover me/i));

    const tooltip = screen.getByText(message);
    expect(tooltip).toHaveClass('custom-tooltip-class');
  });

  it('accepts and applies custom triangle styles', async () => {
    render(
      <Tooltip message={message} triangleStyle="custom-triangle-class">
        <button>Hover me</button>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText(/hover me/i));

    const triangle = document.querySelector('.custom-triangle-class');
    expect(triangle).toBeInTheDocument();
  });

  it('toggles tooltip visibility on multiple hover/unhover events', async () => {
    render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText(/hover me/i);

    await userEvent.hover(button);
    expect(screen.getByText(message)).toBeVisible();

    await userEvent.unhover(button);
    expect(screen.queryByText(message)).not.toBeInTheDocument();

    await userEvent.hover(button);
    expect(screen.getByText(message)).toBeVisible();

    await userEvent.unhover(button);
    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  it('renders dynamic message content correctly', async () => {
    const dynamicMessage = 'Dynamic Message: ' + Math.random();

    render(
      <Tooltip message={dynamicMessage}>
        <button>Hover me</button>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText(/hover me/i));
    expect(screen.getByText(dynamicMessage)).toBeVisible();
  });

  it('defaults to top position when no position prop is provided', async () => {
    render(
      <Tooltip message={message}>
        <button>Hover me</button>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText(/hover me/i));

    const tooltip = screen.getByText(message);
    expect(tooltip).toHaveClass('bottom-full');
  });
});
