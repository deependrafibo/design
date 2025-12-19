import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TruncateOptions {
  sentence: string | React.ReactNode;
  maxCharacters: number;
}

// Note: React.ReactNode is used in TruncateOptions but React types should be available
// from the project's TypeScript configuration

export const truncateSentence = ({ sentence, maxCharacters }: TruncateOptions) => {
  return typeof sentence === 'string' && sentence.length > maxCharacters
    ? `${sentence.substring(0, maxCharacters)}...`
    : sentence;
};

/**
 * Type for measuring text width
 */
export type TextWidthMeasurer = (text: string) => number;

/**
 * Options for text truncation
 */
export interface TruncateTextToFitOptions {
  ellipsis?: string;
  minLength?: number;
}

/**
 * Result of text truncation
 */
export interface TruncateTextToFitResult {
  truncatedText: string;
  isTruncated: boolean;
}

/**
 * General-purpose function to truncate text to fit within available width
 * Works with both SVG and HTML elements using a measurement function
 *
 * @param text - The text to truncate
 * @param measureWidth - Function that measures the width of given text
 * @param availableWidth - Maximum available width for the text
 * @param options - Optional configuration
 * @returns Object with truncated text and whether truncation occurred
 *
 * @example
 * // For SVG elements
 * const measurer = createSvgTextMeasurer(svgElement);
 * if (measurer) {
 *   const result = truncateTextToFit(text, measurer, 80);
 * }
 *
 * @example
 * // For HTML elements
 * const measurer = createHtmlTextMeasurer(htmlElement);
 * if (measurer) {
 *   const result = truncateTextToFit(text, measurer, 200);
 * }
 */
export const truncateTextToFit = (
  text: string,
  measureWidth: TextWidthMeasurer,
  availableWidth: number,
  options?: TruncateTextToFitOptions,
): TruncateTextToFitResult => {
  const ellipsis = options?.ellipsis || '...';
  const minLength = options?.minLength ?? 0;

  // Handle null/undefined/empty text
  if (!text || typeof text !== 'string') {
    return { truncatedText: '', isTruncated: false };
  }

  // Handle empty string
  if (text.length === 0) {
    return { truncatedText: '', isTruncated: false };
  }

  // Handle text shorter than minimum length
  if (text.length <= minLength) {
    return { truncatedText: text, isTruncated: false };
  }

  // Handle invalid or zero available width
  if (!Number.isFinite(availableWidth) || availableWidth <= 0) {
    return { truncatedText: ellipsis, isTruncated: true };
  }

  // Handle ellipsis longer than available width (edge case)
  try {
    const ellipsisWidth = measureWidth(ellipsis);
    if (ellipsisWidth > availableWidth) {
      // If ellipsis itself doesn't fit, return empty or single character
      return { truncatedText: '', isTruncated: true };
    }
  } catch {
    // If measuring ellipsis fails, continue with truncation attempt
  }

  try {
    // Measure full text width
    const fullWidth = measureWidth(text);

    // Handle invalid measurement result
    if (!Number.isFinite(fullWidth) || fullWidth < 0) {
      return { truncatedText: text, isTruncated: false };
    }

    // If text fits, no truncation needed
    if (fullWidth <= availableWidth) {
      return { truncatedText: text, isTruncated: false };
    }

    // Binary search for truncated text
    let low = 0;
    let high = text.length;
    let bestMatch = '';
    let iterations = 0;
    const maxIterations = text.length; // Prevent infinite loops

    while (low <= high && iterations < maxIterations) {
      iterations++;
      const mid = Math.floor((low + high) / 2);

      // Ensure we don't go below minimum length
      if (mid < minLength) {
        low = minLength;
        continue;
      }

      const testText = text.substring(0, mid) + ellipsis;
      let testWidth: number;

      try {
        testWidth = measureWidth(testText);
      } catch {
        // If measurement fails, try shorter text
        high = mid - 1;
        continue;
      }

      // Handle invalid measurement result
      if (!Number.isFinite(testWidth) || testWidth < 0) {
        high = mid - 1;
        continue;
      }

      if (testWidth <= availableWidth) {
        bestMatch = testText;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    // Ensure we have at least ellipsis if truncation happened
    // If no match found but text was too long, return ellipsis
    if (!bestMatch && fullWidth > availableWidth) {
      return { truncatedText: ellipsis, isTruncated: true };
    }

    return { truncatedText: bestMatch || ellipsis, isTruncated: true };
  } catch (error) {
    // Fallback: if measurement fails, return original text
    // This ensures backward compatibility - component won't break
    console.warn('Text truncation measurement failed:', error);
    return { truncatedText: text, isTruncated: false };
  }
};

/**
 * Helper to create a width measurer for SVG text elements
 *
 * @param element - SVG text element used for measurement
 * @returns Function to measure text width, or null if element is invalid
 *
 * @example
 * const measurer = createSvgTextMeasurer(svgElement);
 * if (measurer) {
 *   const width = measurer('Hello World');
 * }
 */
export const createSvgTextMeasurer = (element: SVGTextElement | null): TextWidthMeasurer | null => {
  if (!element || typeof element !== 'object') {
    return null;
  }

  // Check if element has required methods
  if (typeof element.getBBox !== 'function') {
    return null;
  }

  return (text: string): number => {
    // Save original text outside try block so it's accessible in catch
    const originalText = element.textContent;

    try {
      if (typeof text !== 'string') {
        return 0;
      }

      element.textContent = text;

      // Try getComputedTextLength first (more accurate for SVG)
      const computedLength = (element as any).getComputedTextLength?.();
      if (typeof computedLength === 'number' && Number.isFinite(computedLength)) {
        element.textContent = originalText;
        return computedLength;
      }

      // Fallback to getBBox
      const bbox = element.getBBox();
      element.textContent = originalText;

      if (bbox && typeof bbox.width === 'number' && Number.isFinite(bbox.width)) {
        return bbox.width;
      }

      return 0;
    } catch {
      // Restore original text on error
      try {
        element.textContent = originalText || '';
      } catch {
        // Ignore restore errors
      }
      return 0;
    }
  };
};

/**
 * Helper to create a width measurer for HTML elements using Canvas API
 * More accurate than scrollWidth method
 *
 * @param element - HTML element to get font properties from
 * @param font - Optional font string (e.g., "12px Arial")
 * @returns Function to measure text width, or null if unable to create
 *
 * @example
 * const measurer = createHtmlTextMeasurer(htmlElement);
 * if (measurer) {
 *   const width = measurer('Hello World');
 * }
 */
export const createHtmlTextMeasurer = (element: HTMLElement | null, font?: string): TextWidthMeasurer | null => {
  if (!element && !font) {
    return null;
  }

  // Check if Canvas API is available
  if (typeof document === 'undefined' || typeof document.createElement !== 'function') {
    return null;
  }

  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      return null;
    }

    // Set font from element or provided font
    if (element) {
      try {
        const computedStyle = window.getComputedStyle(element);
        context.font = `${computedStyle.fontWeight || 'normal'} ${computedStyle.fontSize || '16px'} ${computedStyle.fontFamily || 'Arial'}`;
      } catch {
        // Fallback to default font
        context.font = font || 'normal 16px Arial';
      }
    } else if (font) {
      context.font = font;
    } else {
      return null;
    }

    return (text: string): number => {
      try {
        if (typeof text !== 'string') {
          return 0;
        }
        const width = context.measureText(text).width;
        return Number.isFinite(width) ? width : 0;
      } catch {
        return 0;
      }
    };
  } catch {
    return null;
  }
};

/**
 * Helper to create a width measurer for HTML elements using scrollWidth
 * Simpler but less accurate - use for quick checks or when Canvas is unavailable
 *
 * @param element - HTML element to measure text width
 * @returns Function to measure text width, or null if element is invalid
 *
 * @example
 * const measurer = createHtmlScrollWidthMeasurer(htmlElement);
 * if (measurer) {
 *   const width = measurer('Hello World');
 * }
 */
export const createHtmlScrollWidthMeasurer = (element: HTMLElement | null): TextWidthMeasurer | null => {
  if (!element || typeof element !== 'object') {
    return null;
  }

  return (text: string): number => {
    try {
      if (typeof text !== 'string') {
        return 0;
      }

      const originalText = element.textContent;
      element.textContent = text;
      const width = element.scrollWidth;
      element.textContent = originalText;

      return Number.isFinite(width) && width >= 0 ? width : 0;
    } catch {
      // Restore original text on error
      try {
        element.textContent = element.textContent || '';
      } catch {
        // Ignore restore errors
      }
      return 0;
    }
  };
};
