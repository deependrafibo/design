import React from 'react';
import { Typography } from '../typographies/Typography';

import '../../tailwindcss/theme.css';
import { ColorPaletteProps } from './types';

export const ColorPalette: React.FC<ColorPaletteProps> = ({ categories }) => {
  return (
    <Typography tag="div" className="p-8 max-w-4xl mx-auto">
      <Typography tag="div" className="mb-8">
        <Typography tag="p" size="16" variant="medium" className="font-sans text-glow-300   ">
          Trumio
        </Typography>
        <Typography tag="h1" size="26" variant="semibold" className="font-sans text-gray-900">
          App Color Palette
        </Typography>
      </Typography>

      {categories.map((category, index) => (
        <Typography tag="div" key={index} className="mb-10">
          <Typography tag="h2" size="24" variant="medium">
            {category.title}
          </Typography>

          {category.description && (
            <Typography tag="p" size="16" variant="regular" className="text-gray-500 mb-4 font-sans">
              {category.description}
            </Typography>
          )}

          <Typography tag="div" className="grid grid-cols-3 flex-wrap gap-2">
            {category.colors.map((color, idx) => (
              <Typography tag="div" key={idx} className="flex flex-col items-center w-28 font-sans">
                <Typography
                  tag="div"
                  className="w-24 h-16 rounded-lg"
                  style={{ backgroundColor: color.hex || '#000' }}
                  children={undefined}
                ></Typography>

                <Typography tag="div" className="flex gap-3 items-center mt-2">
                  <Typography tag="p" size="16" variant="regular" className="font-sans text-gray-700">
                    {color.name}
                  </Typography>

                  <Typography tag="p" size="14" variant="regular" className="text-gray-500">
                    {color.hex}
                  </Typography>
                </Typography>
              </Typography>
            ))}
          </Typography>

          {index !== categories.length - 1 && <hr className="my-6 border-gray-300" />}
        </Typography>
      ))}
    </Typography>
  );
};
