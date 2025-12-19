import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import BoxSkeleton from './box-skeleton/BoxSkeleton';
import ImageSkeleton from './image-skeleton/ImageSkeleton';
import MatrixSkeleton from './matrix-skeleton/MatrixSkeleton';
import ParagraphSkeleton from './paragraph-skeleton/ParagraphSkeleton';

describe('BoxSkeleton', () => {
  it('renders with the provided className', () => {
    render(<BoxSkeleton className="test-class h-10 w-20" />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toHaveClass('test-class');
    expect(skeletonElement).toHaveClass('animate-pulse');
  });

  it('contains a div with background styling', () => {
    render(<BoxSkeleton className="h-10 w-20" />);
    const innerDiv = screen.getByRole('status').firstChild;
    expect(innerDiv).toHaveClass('bg-gray-300');
    expect(innerDiv).toHaveClass('dark:bg-gray-700');
  });
});

describe('ImageSkeleton', () => {
  it('renders with the provided className', () => {
    render(<ImageSkeleton className="test-class" />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toHaveClass('test-class');
    expect(skeletonElement).toHaveClass('animate-pulse');
  });

  it('contains an ImagePlaceholder component', () => {
    render(<ImageSkeleton />);
    // Since ImagePlaceholder is an SVG, we can check for its container
    const container = screen.getByRole('status').querySelector('div');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('items-center');
    expect(container).toHaveClass('justify-center');
  });
});

describe('MatrixSkeleton', () => {
  it('renders the correct number of box skeletons', () => {
    render(<MatrixSkeleton rows={2} cols={3} />);
    const skeletonElements = screen.getAllByRole('status');
    expect(skeletonElements).toHaveLength(6); // 2 rows * 3 cols = 6 items
  });

  it('applies custom className and gridItemClassName', () => {
    render(<MatrixSkeleton rows={1} cols={1} className="matrix-test" gridItemClassName="grid-item-test" />);

    // Check parent container has the custom class
    const container = document.querySelector('.matrix-test');
    expect(container).toBeInTheDocument();

    // Check the box skeleton has the grid item class
    const boxSkeleton = screen.getByRole('status');
    expect(boxSkeleton).toHaveClass('grid-item-test');
  });

  it('creates a grid with the correct number of columns', () => {
    render(<MatrixSkeleton rows={2} cols={4} />);
    const container = screen.getAllByRole('status')[0].parentElement;
    expect(container).toHaveStyle({
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    });
  });
});

describe('ParagraphSkeleton', () => {
  it('renders the default number of lines (3)', () => {
    render(<ParagraphSkeleton />);
    const skeletonElements = screen.getAllByRole('status');
    expect(skeletonElements).toHaveLength(3);
  });

  it('renders the specified number of lines', () => {
    render(<ParagraphSkeleton lines={5} />);
    const skeletonElements = screen.getAllByRole('status');
    expect(skeletonElements).toHaveLength(5);
  });

  it('makes the last line shorter than the others', () => {
    render(<ParagraphSkeleton lines={3} />);
    const skeletonElements = screen.getAllByRole('status');

    // First two lines should be full width
    expect(skeletonElements[0]).toHaveClass('w-full');
    expect(skeletonElements[1]).toHaveClass('w-full');

    // Last line should be 2/3 width
    expect(skeletonElements[2]).toHaveClass('w-2/3');
  });

  it('applies custom className to the container', () => {
    render(<ParagraphSkeleton className="paragraph-test" />);
    const container = document.querySelector('.paragraph-test');
    expect(container).toBeInTheDocument();
  });
});
