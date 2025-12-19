import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hamburger } from './Hamburger';
import '@testing-library/jest-dom/vitest';

describe('Hamburger component', () => {
  it('renders CustomAlignJustify icon by default', () => {
    render(<Hamburger />);
    const alignIcon = screen.getByTestId('menu-icon');
    expect(alignIcon).toHaveClass('opacity-0');
  });

  it('renders CustomMenu icon when clicked', () => {
    render(<Hamburger />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toHaveClass('opacity-100');
  });

  it('toggles icons correctly on multiple clicks', () => {
    render(<Hamburger />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByTestId('menu-icon')).toHaveClass('opacity-100');

    fireEvent.click(button);
    expect(screen.getByTestId('menu-icon')).toHaveClass('opacity-0');
  });

  it('respects the initial `isExpand` prop', () => {
    render(<Hamburger isExpand={true} />);
    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toHaveClass('opacity-100');
  });
});
