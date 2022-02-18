import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  totalPrice: string;
  results: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }[];
  onAddToWishList: (id: number) => Promise<void>;
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultsProps): JSX.Element {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results?.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
