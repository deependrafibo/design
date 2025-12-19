export interface ColorPaletteProps {
  categories: {
    title: string;
    description?: string;
    colors: {
      name?: string;
      hex: string;
    }[];
  }[];
}
