import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { AddProductWishListProps } from './AddProductWishList';

const AddProductWishList = dynamic<AddProductWishListProps>(
  () => import('./AddProductWishList').then(mod => mod.AddProductWishList),
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => Promise<void>;
}

function ProductItemComponent({
  product,
  onAddToWishList,
}: ProductItemProps): JSX.Element {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button type="button" onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

/**
 * 1. pure function components
 * 2. renders too often
 * 3. re-render with same props
 * 4. medium to big size
 */

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
