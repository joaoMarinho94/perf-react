import { memo } from 'react';

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
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button type="button" onClick={() => onAddToWishList(product.id)}>
        Add to wishList
      </button>
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
