# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

# Trumio Design System

A modern and customizable React component library built with TypeScript, Tailwind CSS, and Vite.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Creating Components](#creating-components)
- [Storybook Documentation](#storybook-documentation)
- [Testing Components](#testing-components)
- [Building for Production](#building-for-production)

## Installation

```bash
# Clone the repository
git clone https://github.com/trumio/trumio-design-system.git
cd trumio-design-system

# Install dependencies
npm install
# or
yarn install
```

## Getting Started

```bash
# Start the development server
npm run dev
# or
yarn dev
```

This will start the Vite development server at `http://localhost:5173`.

To run Storybook:

```bash
# Start Storybook
npm run storybook
# or
yarn storybook
```

Storybook will be available at `http://localhost:6006`.

## Project Structure

```
trumio-design-system/
├── src/                 # Source code
│   ├── components/      # React components
│   ├── tailwindcss/     # Tailwind configuration
│   ├── assets/          # Static assets
│   ├── styles.css       # Global styles
│   └── index.ts         # Entry point
├── .storybook/          # Storybook configuration
├── dist/                # Build output
└── ...config files
```

## Creating Components

### Component Structure

Each component should follow this structure:

```
src/components/componentName/
├── ComponentName.tsx           # Component implementation
├── componentName.styles.tsx    # Component styles (if needed)
├── ComponentName.stories.tsx   # Storybook stories
└── ComponentName.test.tsx      # Component tests
```

### Creating a New Component

1. Create a new directory in `src/components/` with your component name
2. Create the component files following the structure above
3. Implement your component in the main `.tsx` file

Here's a basic example:

```tsx
// src/components/MyComponent/MyComponent.tsx
import React from 'react';

export interface MyComponentProps {
  label: string;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ label, onClick }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded" onClick={onClick}>
      {label}
    </div>
  );
};
```

4. Export the component in `src/index.ts`:

```tsx
// In src/index.ts
export * from './components/MyComponent/MyComponent';
```

## Storybook Documentation

Storybook is used to document and showcase components. Each component should have a corresponding `.stories.tsx` file.

### Creating Stories

1. Create a `ComponentName.stories.tsx` file in your component directory
2. Define the component metadata and stories

```tsx
// MyComponent.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Description of your component',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text content of the component',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    label: 'My Component',
    onClick: action('clicked'),
  },
};
```

### Running Storybook

```bash
npm run storybook
# or
yarn storybook
```

## Testing Components

This project uses Vitest and React Testing Library for component testing.

### Writing Tests

1. Create a `ComponentName.test.tsx` file in your component directory
2. Write tests for your component's functionality

```tsx
// MyComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent } from './MyComponent';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

const mockOnClick = vi.fn();

describe('MyComponent', () => {
  it('renders correctly with label', () => {
    render(<MyComponent label="Test Label" />);
    const element = screen.getByText('Test Label');
    expect(element).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<MyComponent label="Click Me" onClick={mockOnClick} />);
    const element = screen.getByText('Click Me');
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
```

### Running Tests

```bash
# Run all tests
npm run test
# or
yarn test

# Generate coverage report
npm run coverage
# or
yarn coverage
```

## Building for Production

```bash
# Build the library
npm run build
# or
yarn build
```

This will generate the distribution files in the `dist/` directory, ready for publishing.

## Table of Contents

1. [Overview](#overview)
2. [Usage](#usage)
3. [Component Documentation](#component-documentation)
4. [Architecture](#architecture)
5. [Development](#development)
6. [Contributing](#contributing)
7. [Troubleshooting](#troubleshooting)

## Overview

The Trumio Design System is built with React, TypeScript, and Vite. It provides UI components that are:

- **Consistent**: All components follow the same design principles and patterns
- **Reusable**: Components are built to be easily reused across projects
- **Accessible**: Components are designed with accessibility in mind
- **Customizable**: Components can be customized to fit specific needs
- **Well-documented**: Components are well-documented with examples

## Usage

### 1. Import CSS

**IMPORTANT**: You must import the CSS in your application's entry point to ensure components are styled correctly:

```jsx
// In your main entry file (e.g., main.jsx, index.jsx, App.jsx)
import '@trumio/trumio-design-system/dist/styles.css';
```

### 2. Use Components

Import and use components in your application:

```jsx
import { Button, Typography, ToggleSwitch } from '@trumio/trumio-design-system';

function App() {
  return (
    <div>
      <Typography variant="h1">Hello Trumio!</Typography>
      <Button variant="primary">Click Me</Button>
      <ToggleSwitch label="Toggle" onChange={(checked) => console.log('Toggled:', checked)} />
    </div>
  );
}
```

## Component Documentation

### Button

The Button component is used to trigger actions.

```jsx
<Button variant="primary" onClick={() => console.log('Button clicked!')}>
  Click Me
</Button>
```

#### Variants

- `primary`: Primary action button
- `outline`: Secondary action button with outline
- `text`: Text-only button
- `errorPrimary`: Primary button for destructive actions
- `errorOutline`: Outline button for destructive actions
- `errorText`: Text button for destructive actions

#### Props

| Prop         | Type                    | Default   | Description                    |
| ------------ | ----------------------- | --------- | ------------------------------ |
| variant      | string                  | 'primary' | Button variant                 |
| icon         | 'chevron' \| 'download' | undefined | Optional icon to display       |
| iconPosition | 'left' \| 'right'       | 'left'    | Position of the icon           |
| children     | ReactNode               | -         | Button content                 |
| disabled     | boolean                 | false     | Disables the button            |
| onClick      | function                | -         | Click handler                  |
| ...props     | HTMLButtonAttributes    | -         | All standard button attributes |

### Other Components

- **Typography**: Text components for consistent typography
- **ToggleSwitch**: Toggle switch for boolean inputs
- **Checkbox**: Checkbox input component
- **RadioButton**: Radio button input component
- **ColorPalette**: Color palette component for design reference
- **LogoTrumio**: Trumio logo component

## Architecture

The Trumio Design System uses a combination of explicit CSS and CSS-in-JS approaches to ensure consistent styling across different environments:

### Component Structure

Each component consists of:

1. **Component file** (e.g., `Button.tsx`): React component logic
2. **Component styles**: CSS styles for the component

### Styling Approach

We use two parallel styling methods to ensure robustness:

1. **Explicit CSS classes**: Component-specific CSS classes (e.g., `btn-primary`)
2. **Inline styles**: Direct style properties for critical styling

This dual approach ensures styles are correctly applied even when CSS processing in consumer projects varies.

### File Structure

```
├── dist/                  # Built distribution files
├── src/                   # Source files
│   ├── assets/            # Assets like icons and images
│   │   ├── components/        # UI components
│   │   │   ├── button/        # Button component
│   │   │   │   ├── Button.tsx         # Component logic
│   │   │   │   ├── button.css         # Component-specific CSS
│   │   │   │   └── button.styles.tsx  # Style definitions
│   │   │   ├── Typography/    # Typography component
│   │   │   ├── ToggleComponents/ # Toggle, Checkbox, Radio components
│   │   │   └── ...            # Other components
│   │   ├── styles.css         # Global styles
│   │   └── index.ts           # Main entry point
│   ├── storybook/             # Storybook configuration and stories
│   ├── package.json           # Project dependencies and scripts
│   └── vite.config.ts         # Vite configuration
```

## Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/trumio/trumio-design-system.git
cd trumio-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook for component development
npm run storybook
```

### Build

```bash
# Build the library
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run coverage
```

## Contributing

### Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Add or update tests
4. Ensure all tests pass
5. Update documentation if necessary
6. Submit a pull request

### Code Standards

- Follow the existing code style
- Write clear commit messages
- Include tests for new features
- Update documentation for API changes

## Troubleshooting

### Styles Not Applying

If component styles are not applying correctly in your project:

1. **Ensure CSS import**: Verify you've imported the CSS in your main file

   ```jsx
   import '@trumio/trumio-design-system/dist/styles.css';
   ```

2. **Check version**: Make sure you're using the latest version

   ```bash
   npm update @trumio/trumio-design-system
   ```

3. **CSS processing**: If you're using a CSS preprocessor or a framework like TailwindCSS, ensure it's not conflicting with the design system's styles.

4. **TailwindCSS integration**: If you're using TailwindCSS, update your `tailwind.config.js`:
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@trumio/trumio-design-system/**/*.{js,jsx,ts,tsx}'],
     // ...rest of your config
   };
   ```

### Build Issues

If you encounter build issues when using the design system:

1. **Peer dependencies**: Ensure you have the required peer dependencies installed

   ```bash
   npm install tailwindcss@^4.0.0 autoprefixer@^10.0.0 postcss@^8.0.0
   ```

2. **React version**: Make sure your React version is compatible
