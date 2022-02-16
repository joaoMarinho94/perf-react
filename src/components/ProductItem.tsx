import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: string;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps): JSX.Element {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
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
