import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BooksPage from './pages/BooksPage.jsx';
import NewBookPage from './pages/NewBookPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Books</Link>
          <Link to="/new">Add Book</Link>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/new" element={<NewBookPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
