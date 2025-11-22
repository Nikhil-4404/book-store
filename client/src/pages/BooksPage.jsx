import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BooksPage() {
  const [data, setData] = useState({ items: [], loading: true });
  const [search, setSearch] = useState('');

  const load = async () => {
    try {
      const res = await axios.get('/api/books', { params: { search } });
      setData({ items: res.data.items, loading: false });
    } catch (e) {
      console.error(e);
      setData({ items: [], loading: false });
    }
  };

  useEffect(() => { load(); }, []); // initial

  const onSearch = (e) => {
    e.preventDefault();
    load();
  };

  return (
    <div>
      <h1>Books</h1>
      <form onSubmit={onSearch} style={{ marginBottom: '1rem' }}>
        <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {data.loading ? <p>Loading...</p> : (
        <ul>
          {data.items.map(b => (
            <li key={b._id}>
              <strong>{b.title}</strong> by {b.author} (${b.price})
            </li>
          ))}
        </ul>
      )}
      <p><Link to="/new">Add a new book</Link></p>
    </div>
  );
}
