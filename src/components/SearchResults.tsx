import { List, ListRowRenderer } from 'react-virtualized';

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
    </div>
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results?.length || 0}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
