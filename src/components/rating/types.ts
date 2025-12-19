export interface RatingProps {
  rating: number;
  tittle?: string;
  value?: number;
  maxValue?: number;
  onChange?: (rating: number) => void;
}
