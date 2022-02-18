import { FormEvent, useCallback, useState } from 'react';
import { SearchResults } from '../components/SearchResults';

export default function Home(): JSX.Element {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
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

      <SearchResults onAddToWishList={addToWhishList} results={results} />
    </>
  );
}
