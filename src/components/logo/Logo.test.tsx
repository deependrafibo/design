import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';

describe('LogoTrumio Component', () => {
  it('renders the Logo component', () => {
    render(<Logo logoWidth={150} logoHeight={150} />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('does not render the Name component when nameWidth and nameHeight are missing', () => {
    render(<Logo />);
    const name = screen.queryByTestId('name');
    expect(name).not.toBeInTheDocument();
  });
});
