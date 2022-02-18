import { FormEvent, useCallback, useState } from 'react';
import { SearchResults } from '../components/SearchResults';

type Results = {
  totalPrice: string;
  data: any[];
};

export default function Home(): JSX.Element {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState({} as Results);

  const handleSearch = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products = data.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice = formatter.format(
      data.reduce((total, product) => total + product.price, 0)
    );

    setResults({ totalPrice, data: products });
  };

  const addToWhishList = useCallback(async (id: number): Promise<void> => {
    console.log(id);
  }, []);

  return (
    <>
      <h1>search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults
        onAddToWishList={addToWhishList}
        results={results.data}
        totalPrice={results.totalPrice}
      />
    </>
  );
}
