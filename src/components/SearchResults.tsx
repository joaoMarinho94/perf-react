import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: {
    id: string;
    price: number;
    title: string;
  }[];
}

export function SearchResults({ results }: SearchResultsProps): JSX.Element {
  const totalPrice = useMemo(
    () => results.reduce((total, product) => total + product.price, 0),
    [results]
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
