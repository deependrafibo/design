import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { OrgLogo } from './OrgLogo';
import '@testing-library/jest-dom/vitest';

describe('OrgLogo component', () => {
  it('renders with logo and text by default', () => {
    render(<OrgLogo />);

    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    const poweredByText = screen.getByText('Powered by');
    expect(poweredByText).toBeInTheDocument();
  });

  it('displays only the logo when showText is false', () => {
    render(<OrgLogo showText={false} />);
    expect(screen.queryByText('Acme Corp')).not.toBeInTheDocument();
    expect(screen.queryByText('Powered by Trumio')).not.toBeInTheDocument();
  });

  it('displays image logo when imageUri is provided', () => {
    const imageUri = 'https://example.com/logo.png';
    render(<OrgLogo imageUri={imageUri} />);

    const image = screen.getByTestId('org-logo-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imageUri);
    expect(image).toHaveAttribute('alt', 'Acme Corp logo');
    expect(image).toHaveClass('w-full', 'h-auto', 'object-contain');
  });

  it('displays image logo with powered by text when both imageUri and showText are true', () => {
    const imageUri = 'https://example.com/logo.png';
    render(<OrgLogo imageUri={imageUri} showText={true} showPoweredBy={true} />);

    const image = screen.getByTestId('org-logo-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('w-full', 'h-auto', 'object-contain');
    expect(screen.getByText('Powered by')).toBeInTheDocument();
  });

  it('displays image logo without powered by text when showText is false', () => {
    const imageUri = 'https://example.com/logo.png';
    render(<OrgLogo imageUri={imageUri} showText={false} />);

    const image = screen.getByTestId('org-logo-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('w-full', 'h-auto', 'object-contain');
    expect(screen.queryByText('Powered by')).not.toBeInTheDocument();
  });

  it('applies correct max-width to image container', () => {
    const imageUri = 'https://example.com/logo.png';
    render(<OrgLogo imageUri={imageUri} size="sm" />);

    const imageContainer = screen.getByTestId('org-logo-image').parentElement;
    expect(imageContainer).toHaveStyle({ maxWidth: '16px' });
  });
});
