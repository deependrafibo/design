import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Typography Component', () => {
  it('renders children text correctly', () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText('Test Text')).not.toBeNull();
  });
  it('applies the correct font size', () => {
    render(<Typography size="26">Large Text</Typography>);
    const typographyElement = screen.getByText('Large Text');
    expect(typographyElement).toHaveClass('text-[26px]');
  });

  it('applies the correct font variant', () => {
    render(<Typography variant="semibold">Bold Text</Typography>);
    const typographyElement = screen.getByText('Bold Text');
    expect(typographyElement).toHaveClass('font-semibold');
  });

  it('renders as the correct HTML tag', () => {
    const { container } = render(<Typography tag="h1">Heading 1</Typography>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('applies additional className styles', () => {
    render(<Typography className="text-red-500">Styled Text</Typography>);
    const typographyElement = screen.getByText('Styled Text');
    expect(typographyElement).toHaveClass('text-red-500');
  });
});
