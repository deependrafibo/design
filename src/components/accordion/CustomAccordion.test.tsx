import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { CustomAccordion } from './CustomAccordion';
import { AccordionType } from './types';

const singleSection = {
  value: 'faq1',
  trigger: <div>Accordion Trigger</div>,
  content: <div>Accordion Content</div>,
};

const multipleSections = [
  singleSection,
  {
    value: 'faq2',
    trigger: <div>Second Trigger</div>,
    content: <div>Second Content</div>,
  },
];

describe('CustomAccordion', () => {
  it('renders with a single section', () => {
    render(<CustomAccordion type={AccordionType.SINGLE} section={singleSection} />);

    // Just check that the trigger text is present
    expect(screen.getByText('Accordion Trigger')).toBeInTheDocument();
  });

  it('expands content when trigger is clicked', async () => {
    render(<CustomAccordion type={AccordionType.SINGLE} section={singleSection} collapsible={true} />);

    // Find trigger by text
    const trigger = screen.getByText('Accordion Trigger');

    // Click the trigger
    fireEvent.click(trigger);

    // Check that content appears
    await waitFor(() => {
      expect(screen.getByText('Accordion Content')).toBeInTheDocument();
    });
  });

  it('handles multiple sections', () => {
    render(<CustomAccordion type={AccordionType.MULTIPLE} sections={multipleSections} />);

    // Check that both triggers are rendered
    expect(screen.getByText('Accordion Trigger')).toBeInTheDocument();
    expect(screen.getByText('Second Trigger')).toBeInTheDocument();
  });
});
