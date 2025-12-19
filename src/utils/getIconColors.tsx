const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (value: number) => {
    const hex = Math.max(0, Math.min(255, Math.round(value))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const adjustBrightness = (color: string, factor: number): string => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  if (factor > 0) {
    return rgbToHex(rgb.r + (255 - rgb.r) * factor, rgb.g + (255 - rgb.g) * factor, rgb.b + (255 - rgb.b) * factor);
  } else {
    const absFactor = Math.abs(factor);
    return rgbToHex(rgb.r * (1 - absFactor), rgb.g * (1 - absFactor), rgb.b * (1 - absFactor));
  }
};

export const getColorPair = (
  name: string,
  lightnessFactor: number = 0.3,
): {
  lighter: string;
  darker: string;
} => {
  const colors = [
    '#0065c1',
    '#0185e4',
    '#1e88e5',
    '#2196F3',
    '#28C76F',
    '#FD7E14',
    '#008495',
    '#26B4E6',
    '#8B5CF6',
    '#EC4899',
    '#6366F1',
    '#06B6D4',
    '#10B981',
    '#F59E0B',
    '#7C3AED',
    '#DB2777',
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const baseColor = colors[Math.abs(hash) % colors.length];

  return {
    lighter: adjustBrightness(baseColor, lightnessFactor),
    darker: adjustBrightness(baseColor, -lightnessFactor),
  };
};
