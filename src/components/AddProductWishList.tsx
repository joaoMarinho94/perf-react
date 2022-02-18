export interface AddProductWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductWishListProps): JSX.Element {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button type="button" onClick={onAddToWishList}>
        Sim
      </button>
      <button type="button" onClick={onRequestClose}>
        Não
      </button>
    </span>
  );
}
