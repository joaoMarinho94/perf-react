import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
  onAddToWishList: (id: number) => Promise<void>;
}

export function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps): JSX.Element {
  const totalPrice = useMemo(
    () => results.reduce((total, product) => total + product.price, 0),
    [results]
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
