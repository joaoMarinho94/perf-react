import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: {
    id: string;
    price: number;
    title: string;
  }[];
}

export function SearchResults({ results }: SearchResultsProps): JSX.Element {
  return (
    <div>
      {results.map(product => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}
