export interface RadioCardProps {
  title: string;
  description: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export interface RadioOptionProps {
  id: string;
  title: string;
  description: string;
}

export interface RadioCardGroupProps {
  options: RadioOptionProps[];
  defaultSelectedId: string;
  onChange?: (selectedId: string) => void;
}
